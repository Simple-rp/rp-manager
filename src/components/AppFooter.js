import React from 'react'
import { CFooter } from '@coreui/react'
import packageJson from '../../package.json'

const AppFooter = () => {
  

  return (
    <CFooter className="px-4">        
      <div>
        <b>{packageJson.name}</b>
        <span className="ms-1">- Version - V.{packageJson.version}</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <b>{packageJson.author}</b>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
