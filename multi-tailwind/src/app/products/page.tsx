import React from 'react'
const Products =() => {

const productData = [
  {id:1, name: "Lipstick", price:50 , description: "Cosmetics", image: "/lipstick.jpg" },
  {id:2, name: "Foundation", price:120 , description: "Cosmetics", image: "/found.jpg" },
  {id:3, name: "Makeup Sponge & brushes", price:200 , description:"Cosmetics" , image: "/brush.jpg" },
  {id:4, name: "Eye-Shadow", price:500 , description: "Cosmetics" , image: "/eyesjadow.jpg" },
  {id:5,name: "Mascara & Lashes", price:100 , description:"Cosmetics" , image: "/lash.jpg"  },
  {id:6, name: "Face Powder", price:250 , description: "Cosmetics", image: "/powder.jpg" },
  {id:7, name: "Nail Polishes", price:50 , description: "Cosmetics" , image: "/nail.jpg" },
  {id:8, name: "Facial Kit", price:600 , description: "Cosmetics" , image: "/face.jpg" },
  {id:9, name: "Highlighters", price:300 , description: "Cosmetics" , image: "/lighter.jpg" },

];
 return (
   
    
      <div className="products grid grid-cols-1 md:grid-cols-3 gap-10 px-10 my-10">
     
 
 
        {productData.map(product => (
          <div key={product.id} className="product-card bg-white p-5 rounded-md shadow-lg  shadow-pink-500 text-center">
     <img src={product.image} alt={product.name}  className='w-full rounded-md transition-transform duration-300 transform hover:scale-110'/>
     <h3 className='mt-4 text-2xl font-bold'>{product.name}</h3>
     <p className='text-pink-600 text-lg font-bold'>{product.description}</p>
     <div className='price text-pink-900 text-xl font-semibold mt-2'>${product.price}</div>
     <button className='mt-4 px-4 py-2 bg-rose-900  hover:bg-pink-400 text-white rounded-full'>Add to cart</button>
          </div>
       ) )}
      </div>
    
  
  )
}

export default Products