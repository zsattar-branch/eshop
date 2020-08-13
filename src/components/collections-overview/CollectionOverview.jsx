import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import {selectShopCollections} from '../../redux/shop/shop.selector'
import Preview from '../preview_collection/Preview'

import './CollectionOverview.scss'

function CollectionOverview({ collections }) {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => {
          return <Preview key={id} {...otherCollectionProps} />
        })
      }
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  collections:selectShopCollections
})

export default connect(mapStateToProps)(CollectionOverview)