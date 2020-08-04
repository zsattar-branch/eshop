import React, { Component } from 'react'
import Shop_Data from './Shop_Data'
import Preview from '../../components/preview_collection/Preview'


class Shop extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collections: Shop_Data
    }
  }
  render() {
    const {collections} = this.state
    return (<div className="shop-page">
      {
        collections.map(({id, ...otherCollectionProps} )=> {
        return <Preview key={id} {...otherCollectionProps}/>
        })
        }
    </div>)
  }
}

export default Shop