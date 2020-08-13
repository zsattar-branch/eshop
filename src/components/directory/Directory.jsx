import React from 'react'
import MenuItem from '../menuitems/MenuItem'
import './Directory.scss'
import { connect } from 'react-redux'
import { selectDirectorySections } from '../../redux/directory/directory.selector'
import { createStructuredSelector } from 'reselect'

function Directory({ sections }) {

  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => {
        return <MenuItem key={id} {...otherSectionProps} />
      })}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory)