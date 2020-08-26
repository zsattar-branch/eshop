import { connect } from 'react-redux'
import { compose } from 'redux'
import {selectIsCollectionsLoaded} from '../../redux/shop/shop.selector'

import Spinner from '../../components/spinner/Spinner'
import CollectionCategory from './CollectionCategory'
import { createStructuredSelector } from 'reselect'


const mapStateToProps = createStructuredSelector({
  isLoading: (state)=> !selectIsCollectionsLoaded(state)
})

const CollectionCategoryContainer = compose(
  connect(mapStateToProps),
  Spinner
)(CollectionCategory)

export default CollectionCategoryContainer