import { cilChatBubble, cilSend,  } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CButton, CFormInput, CInputGroup, CInputGroupText } from '@coreui/react'
import React from 'react'

const ContactUs = () => {
  return (
   
    <CInputGroup className="input-prepend">
    <CInputGroupText>
      <CIcon icon={cilChatBubble} />
    </CInputGroupText>
    <CFormInput type="text" placeholder="Message..." />
    <CButton color="info"><CIcon icon={cilSend} /></CButton>
  </CInputGroup>
  )
}

export default ContactUs