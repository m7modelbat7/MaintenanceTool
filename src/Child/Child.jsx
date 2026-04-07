import React from 'react'

export default function Child(props) {


    const {name, price,id, color, onSale} = props.ProductInfo
    
  return (<React.Fragment>
    
    <div className="bg-info p-2 col-md-4 position-relative">
        <h1 className='text-center mt-5 bg-success text-white' >Child</h1>
        <h2>Name: {name}</h2>
        <h2 className={price > 300 ? 'text-danger' : 'text-success'}>Price: {price}</h2>
        <h2>ID: {id}</h2>
        <h2>Color: {color}</h2>
        <h2>On Sale: {onSale ? "Yes" : "No"}</h2> 
             
        {onSale && <span className='badge bg-danger p-3 position-absolute top-0 end-0'>On Sale</span>}
        <button onClick={() => props.handleDelete(props.ProductInfo)} className='btn btn-danger mt-3'><i className='fas fa-trash'></i> </button>
    </div>
    </React.Fragment>
)
}
