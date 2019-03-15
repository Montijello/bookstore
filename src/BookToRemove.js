import React from 'react'

function BookToRemove({id, title, author, handleRemoveBook}) {
  return (
    <div className="list-group-item">
      <div className="row">
        <div className="col-6">{title}</div>
        <div className="col-3">{author}</div>
        <button className="col-3 btn btn-secondary" onClick={() => handleRemoveBook(id)}>Delete</button>
      </div>
    </div>
  )
}

export default BookToRemove