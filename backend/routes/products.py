from flask import Blueprint, jsonify, request
from models import db, Product, ProductVariant, ProductImage, Review, UserPhoto

products_bp = Blueprint('products', __name__)

@products_bp.route('/', methods=['GET'])
def get_products():
    category = request.args.get('category')
    size = request.args.get('size')
    color = request.args.get('color')
    fabric = request.args.get('fabric')
    occasion = request.args.get('occasion')
    pattern = request.args.get('pattern')
    gender = request.args.get('gender')
    search = request.args.get('search')
    
    query = Product.query
    
    if search:
        query = query.filter(Product.name.ilike(f"%{search}%"))
    if category:
        query = query.filter_by(category=category)
    if fabric:
        query = query.filter_by(fabric=fabric)
    if occasion:
        query = query.filter_by(occasion=occasion)
    if pattern:
        query = query.filter_by(pattern=pattern)
    if gender:
        query = query.filter_by(gender=gender)
        
    products = query.all()
    result = []
    
    for p in products:
        variants = p.variants
        # If filtering by size/color, we only include the product if it has a matching variant
        if size and not any(v.size == size for v in variants):
            continue
        if color and not any(v.color.lower() == color.lower() for v in variants):
            continue
            
        variant_data = []
        for v in variants:
            variant_data.append({
                "id": v.id,
                "color": v.color,
                "size": v.size,
                "quantity": v.quantity,
                "price_ttd": v.price_ttd,
                "price_garba": v.price_garba,
                "price_maha": v.price_maha,
                "design_id": v.design_id
            })
            
        images = ProductImage.query.filter_by(product_id=p.id).all()

        result.append({
            "id": p.id,
            "name": p.name,
            "description": p.description,
            "category": p.category,
            "fabric": p.fabric,
            "occasion": p.occasion,
            "pattern": p.pattern,
            "gender": p.gender,
            "variants": variant_data,
            "images": [img.image_url for img in images if not img.is_video],
            "video": next((img.image_url for img in images if img.is_video), None)
        })
        
    return jsonify(result)

@products_bp.route('/<int:product_id>', methods=['GET'])
def get_product(product_id):
    p = Product.query.get_or_404(product_id)
    
    variants = p.variants
    variant_data = []
    for v in variants:
        variant_data.append({
            "id": v.id,
            "color": v.color,
            "size": v.size,
            "quantity": v.quantity,
            "price_ttd": v.price_ttd,
            "price_garba": v.price_garba,
            "price_maha": v.price_maha,
            "design_id": v.design_id
        })
        
    images = ProductImage.query.filter_by(product_id=p.id).all()
    reviews = Review.query.filter_by(product_id=p.id).all()
    user_photos = UserPhoto.query.filter_by(product_id=p.id, is_approved=True).all()
        
    return jsonify({
        "id": p.id,
        "name": p.name,
        "description": p.description,
        "category": p.category,
        "fabric": p.fabric,
        "occasion": p.occasion,
        "pattern": p.pattern,
        "gender": p.gender,
        "variants": variant_data,
        "images": [img.image_url for img in images if not img.is_video],
        "video": next((img.image_url for img in images if img.is_video), None),
        "reviews": [{"rating": r.rating, "comment": r.comment, "user_id": r.user_id} for r in reviews],
        "user_photos": [up.photo_url for up in user_photos]
    })
