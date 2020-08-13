import React from 'react'
import { connect } from 'react-redux'

import { selectionCollection } from '../../redux/shop/shop.selector'

import './CategoryCategory.scss'


function CollectionCategory({ collection }) {
  console.log(collection)
  return (
    <div className="collection-page">
      <h2>collection Page</h2>

    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectionCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionCategory)
