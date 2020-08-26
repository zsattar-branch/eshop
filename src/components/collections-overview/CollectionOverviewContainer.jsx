import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
import Spinner from '../spinner/Spinner'
import CollectionOverview from './CollectionOverview'
import { selectIsCollectionFetching } from '../../redux/shop/shop.selector'

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
})

// export default connect(mapStateToProps)(Spinner(CollectionOverview))

//SAME AS ABOVE

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  Spinner
)(CollectionOverview)

export default CollectionOverviewContainer