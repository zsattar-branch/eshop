import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import CollectionOverview from '../../components/collections-overview/CollectionOverview'
import CollectionCategory from '../collection/CollectionCategory'
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.js'
import { updateCollections } from '../../redux/shop/shop.actions'
import Spinner from '../../components/spinner/Spinner'

const CollectionOverviewWithSpinner = Spinner(CollectionOverview)
const CollectionCategoryWithSpinner = Spinner(CollectionCategory)

class Shop extends Component {
  state = {
    loading: true
  }
  unsubscribeFromSnapshot = null

  componentDidMount() {
    const { updateCollections } = this.props
    const collectionRef = firestore.collection('collections');

    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
      updateCollections(collectionsMap);
      this.setState({
        loading: false
      })
    })
  }

  render() {
    const { match } = this.props
    const { loading } = this.state

    return (<div className="shop-page">
      <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props} />} />
      <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionCategoryWithSpinner isLoading={loading} {...props} />} />
    </div>)
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(Shop)