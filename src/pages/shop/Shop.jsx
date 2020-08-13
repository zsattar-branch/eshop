import React from 'react'
import { Route } from 'react-router-dom'
import CollectionOverview from '../../components/collections-overview/CollectionOverview'
import CollectionCategory from '../collection/CollectionCategory'


function Shop({ match }) {
  return (<div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionCategory}/>
  </div>)
}



export default Shop