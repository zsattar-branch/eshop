import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import CollectionOverview from '../../components/collections-overview/CollectionOverview'
import CollectionCategory from '../collection/CollectionCategory'
// import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.js'
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions'
import { selectIsCollectionFetching, selectIsCollectionsLoaded } from '../../redux/shop/shop.selector'
import Spinner from '../../components/spinner/Spinner'


const CollectionOverviewWithSpinner = Spinner(CollectionOverview)
const CollectionCategoryWithSpinner = Spinner(CollectionCategory)

class Shop extends Component {
  // state = {
  //   loading: true
  // }
  // unsubscribeFromSnapshot = null

  // componentDidMount() {
  // const { updateCollections } = this.props
  // const collectionRef = firestore.collection('collections');

  // // fetch('https://firestore.googleapis.com/v1/projects/zains-clothing/databases/(default)/documents/collections')
  // //   .then(response => response.json())
  // //   .then(collections => console.log(collections))

  // collectionRef.get().then(snapshot => {
  //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
  //   updateCollections(collectionsMap);
  //   this.setState({
  //     loading: false
  //   })
  // })

  //   this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
  //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
  //     updateCollections(collectionsMap);
  //     this.setState({
  //       loading: false
  //     })
  //   })
  // }

  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props
    fetchCollectionsStartAsync()
  }

  render() {
    const { match, isFetching, isCollectionLoaded } = this.props
    // const { loading } = this.state

    return (<div className="shop-page">
      <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={isFetching} {...props} />} />
      <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionCategoryWithSpinner isLoading={!isCollectionLoaded} {...props} />} />
    </div>)
  }
}

const mapStateToProps = createStructuredSelector({
  isFetching: selectIsCollectionFetching,
  isCollectionLoaded: selectIsCollectionsLoaded
})

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})


// const mapDispatchToProps = dispatch => ({
//   updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
// })

export default connect(mapStateToProps, mapDispatchToProps)(Shop)