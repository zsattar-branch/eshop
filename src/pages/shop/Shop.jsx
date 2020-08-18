import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import CollectionOverview from '../../components/collections-overview/CollectionOverview'
import CollectionCategory from '../collection/CollectionCategory'
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.js'
import { updateCollections } from '../../redux/shop/shop.actions'

class Shop extends Component {

  unsubscribeFromSnapshot = null

  componentDidMount() {
    const { updateCollections } = this.props
    const collectionRef = firestore.collection('collections');

    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
      updateCollections(collectionsMap)
    })
  }

  render() {
    const { match } = this.props
    return (<div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionCategory} />
    </div>)
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(Shop)