import React, { useState } from 'react'
import Child from '../Child/Child'

export default function Parent() {

    const [Product, setProduct] = useState([
        { name: "Product 1", price: 100, id: 1 , color: "red", onSale: true},
        { name: "Product 2", price: 200, id: 2 , color: "blue", onSale: false},
        { name: "Product 3", price: 300, id: 3 , color: "green", onSale: true},
        { name: "Product 4", price: 400, id: 4 , color: "yellow", onSale: false},
        { name: "Product 5", price: 500, id: 5 , color: "purple", onSale: true},    
        { name: "Product 6", price: 600, id: 6 , color: "orange", onSale: false},
    ])
    function handleDelete(product) {
        const answer = window.confirm(`Do you want to delete ${product.name}?`);

        if (answer) {
            alert(`Yes, you clicked: ${product.name}`);
            setProduct(Product.filter((item) => item.id !== product.id));
            
        } else {
            alert(`No, you did not delete: ${product.name}`);
        }
}
  return (
    <React.Fragment>
        <div className='text-center mt-5 bg-primary text-white' >Parent
        <div className="container mt-5">
            <div className="row g-2">
                {Product.map((item, index) => (
                    <Child ProductInfo={item} handleDelete={handleDelete} key={index} />
                ))}
            </div>
        </div>
        </div>
    </React.Fragment>
  )
}
