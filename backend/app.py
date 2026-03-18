from flask import Flask, jsonify
from flask_cors import CORS
from config import Config
from models import db

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    CORS(app)
    db.init_app(app)

    # Register Blueprints
    from routes.products import products_bp
    from routes.auth import auth_bp
    from routes.cart_orders import cart_orders_bp
    from routes.admin_dashboard import admin_bp

    app.register_blueprint(products_bp, url_prefix='/api/products')
    app.register_blueprint(auth_bp, url_prefix='/api/auth')
    app.register_blueprint(cart_orders_bp, url_prefix='/api/orders')
    app.register_blueprint(admin_bp, url_prefix='/api/admin')

    @app.route("/")
    def home():
        return {"message": "M&M Fashion backend running"}

    return app

app = create_app()

if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run(debug=True, port=5000)