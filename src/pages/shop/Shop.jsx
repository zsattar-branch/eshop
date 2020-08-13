import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectShopCollections } from '../../redux/shop/shop.selector'
import Preview from '../../components/preview_collection/Preview'


function Shop({ collections }) {
  return (<div className="shop-page">
    {
      collections.map(({ id, ...otherCollectionProps }) => {
        return <Preview key={id} {...otherCollectionProps} />
      })
    }
  </div>)
}

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections
})

export default connect(mapStateToProps)(Shop)