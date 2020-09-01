import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import CollectionOverviewContainer from '../../components/collections-overview/CollectionOverviewContainer'
import CollectionCategory from '../collection/CollectionCategory'
// import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.js'
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions'
import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selector'
import Spinner from '../../components/spinner/Spinner'


const CollectionCategoryWithSpinner = Spinner(CollectionCategory)

// class Shop extends Component {
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

function Shop({ match, isCollectionLoaded, fetchCollectionsStartAsync }) {
  //can also be destructed this way^^ or below
  // const Shop = ({match,fetchCollectionsStartAsync,isCollectionLoaded}) => {

  
  useEffect(() => {
    fetchCollectionsStartAsync()
  }, [fetchCollectionsStartAsync])
  
  //former lifecycle method 
  
   // componentDidMount() {
  //   const { fetchCollectionsStartAsync } = this.props
  //   fetchCollectionsStartAsync()
  // }


  //we can change the CollectionCategoryWithSpinner to OverviewContainer as well
  return (<div className="shop-page">
    <Route
      exact
      path={`${match.path}`}
      component={CollectionOverviewContainer}
    />
      
    <Route
      path={`${match.path}/:collectionId`}
      render={(props) =>
        <CollectionCategoryWithSpinner
          isLoading={!isCollectionLoaded}
          {...props} />}
    />
  </div>)
  
}

const mapStateToProps = createStructuredSelector({
  isCollectionLoaded: selectIsCollectionsLoaded
})

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})


// const mapDispatchToProps = dispatch => ({
//   updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
// })

export default connect(mapStateToProps, mapDispatchToProps)(Shop)