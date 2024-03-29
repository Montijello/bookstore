import React from 'react'

function Book({id, title, author, price, handleAddToCart}) {
  return (
    <div className="list-group-item">
      <div className="row">
        <div className="col-md-6">{title}</div>
        <div className="col-md-2">{author}</div>
        <div className="col-md-2">{price ? `$${price.toFixed(2)}` : 'Out of Stock'}</div>
        <button className="col-md-2 btn btn-secondary add-button" onClick={() => handleAddToCart(id)}>Add to Cart</button>
      </div>
    </div>
  )
}

export default Book