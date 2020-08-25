import { ShopActionTypes } from './shop.type'
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase'

// export const updateCollections = collectionsMap => ({
//   type: ShopActionTypes.UPDATE_COLLECTIONS,
//   payload:collectionsMap
// })

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START
})

export const fetchCollectionsSuccess = collectionsMap => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
})


//thunk does not care for this because it is an action object
export const fetchCollectionsFailure = errorMessage => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload:errorMessage
})

//actual function we pass to components to begin process
//it is an action function so thunk uses it
export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionsStart())

    collectionRef
      .get()
      .then(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
      dispatch(fetchCollectionsSuccess(collectionsMap))
      })
      .catch(error => dispatch(fetchCollectionsFailure(error.message)))
  }
}
