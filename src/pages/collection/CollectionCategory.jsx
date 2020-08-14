import React from 'react'
import { connect } from 'react-redux'

import { selectionCollection } from '../../redux/shop/shop.selector'
import './Collection.scss'
import CollectionItem from '../../components/collection_item/Collection_Item'


function CollectionCategory({ collection }) {
  console.log(collection)
  const {title, items} = collection
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">{items.map(item => <CollectionItem key={item.id} item={item}/>)}
      
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectionCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionCategory)
