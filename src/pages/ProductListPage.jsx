import { useState } from "react";

const Filters = ({ onFilter }) => {

const [filters,setFilters]=useState({
size:"",
color:"",
fabric:"",
occasion:"",
pattern:"",
gender:"",
category:"",
price:[0,5000]
});

const sizes=["S","M","L","XL"];
const colors=["Red","Blue","Green"];
const fabrics=["Cotton","Silk"];
const occasions=["Festive","Casual"];
const patterns=["Printed","Embroidered"];
const genders=["Women","Men"];
const categories=["Garba Dress"];

const handleChange=(name,value)=>{

const updated={...filters,[name]:value};

setFilters(updated);

onFilter(updated);

};

return(

<div className="border p-4 rounded shadow-sm space-y-4">

<h2 className="font-semibold text-lg">Filters</h2>

{/* SIZE */}

<div>

<h3 className="font-medium mb-2">Size</h3>

<div className="flex flex-wrap gap-2">

{sizes.map(size=>(

<button
key={size}
onClick={()=>handleChange("size",size)}
className={`px-3 py-1 border rounded ${
filters.size===size?"bg-black text-white":""
}`}
>

{size}

</button>

))}

</div>

</div>

{/* COLOR */}

<div>

<h3 className="font-medium mb-2">Color</h3>

<div className="flex flex-wrap gap-2">

{colors.map(color=>(

<button
key={color}
onClick={()=>handleChange("color",color)}
className={`px-3 py-1 border rounded ${
filters.color===color?"bg-black text-white":""
}`}
>

{color}

</button>

))}

</div>

</div>

{/* FABRIC */}

<div>

<h3 className="font-medium mb-2">Fabric</h3>

<select
className="border p-2 w-full"
onChange={(e)=>handleChange("fabric",e.target.value)}
>

<option value="">All</option>

{fabrics.map(f=>(
<option key={f}>{f}</option>
))}

</select>

</div>

{/* OCCASION */}

<div>

<h3 className="font-medium mb-2">Occasion</h3>

<select
className="border p-2 w-full"
onChange={(e)=>handleChange("occasion",e.target.value)}
>

<option value="">All</option>

{occasions.map(o=>(
<option key={o}>{o}</option>
))}

</select>

</div>

{/* PATTERN */}

<div>

<h3 className="font-medium mb-2">Pattern</h3>

<select
className="border p-2 w-full"
onChange={(e)=>handleChange("pattern",e.target.value)}
>

<option value="">All</option>

{patterns.map(p=>(
<option key={p}>{p}</option>
))}

</select>

</div>

{/* PRICE */}

<div>

<h3 className="font-medium mb-2">Price Range</h3>

<input
type="range"
min="0"
max="5000"
onChange={(e)=>handleChange("price",[0,e.target.value])}
/>

</div>

</div>

);

};

export default Filters;