import React from 'react'
import "./Collection_item.scss"
import Button from '../button/Button'

export default function CollectionItem({ id, name, price, imageUrl }) {
  return (
    <div className="collection-item">
      <div className="image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
        <Button inverted>Add To Cart </Button>
    </div>
  )
}
