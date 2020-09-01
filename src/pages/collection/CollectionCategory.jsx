import React from 'react'
import { connect } from 'react-redux'

import { selectionCollection } from '../../redux/shop/shop.selector'
import './Collection.scss'
import CollectionItem from '../../components/collection_item/Collection_Item'

// import { firestore} from '../../firebase/firebase'

function CollectionCategory({ collection }) {
  // cleanup function used below and described how it is used. when it mounts it shows the snapshot. When it unmounts it shows the i am unsubscribed

  // useEffect(() => {
  //   const unsubscribe = firestore.collection('collections').onSnapshot(snapshot => console.log(snapshot))
  //   return () => {
  //     console.log('I am unsubscribed')
  //     unsubscribe()
  //   }
  // })
  const {title, items} = collection
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">{items.map(item => <CollectionItem key={item.id} item={item}/>)}      
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectionCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionCategory)
