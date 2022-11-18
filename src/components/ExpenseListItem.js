import React from 'react'
import {Link} from 'react-router-dom'


  const ExpsenseListItem = ({id, description, amount,createdAt}) => (
    
    <div>
      <div>
      <Link to={`/edit/${id}`}>
        <h2>{description}</h2>
      </Link>
      </div>
        <h3>{amount} - created at: {createdAt} </h3>
        
        
    </div>
  )

  export default ExpsenseListItem