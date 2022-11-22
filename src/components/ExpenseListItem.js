import React from 'react'
import moment from 'moment'
import numeral from 'numeral'
import {Link} from 'react-router-dom'


  const ExpsenseListItem = ({id, description, amount,createdAt}) => (
    
    <div>
      <div>
      <Link to={`/edit/${id}`}>
        <h2>{description}</h2>
      </Link>
      </div>
        <h3>{numeral(amount/100).format('$0,0.00')} - created at: {moment(createdAt).format('MMMM Do, YYYY')} </h3>
        
        
    </div>
  )

  export default ExpsenseListItem