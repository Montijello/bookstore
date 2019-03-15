import React from 'react'

function CartItem({ id, title, price, handleTrashItem}) {
  return (
    <div className="list-group-item">
      <div className="row">
        <div className="col-7">{title}</div>
        <div className="col-2">{price ? `$${price.toFixed(2)}` : 'Unavailable'}</div>
        <button className="col-3 btn btn-secondary" onClick={() => handleTrashItem(id)}>
          Remove
        </button>
      </div>
    </div>
  )

}

export default CartItem