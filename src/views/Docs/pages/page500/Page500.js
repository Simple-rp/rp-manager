import React from 'react';
import {
  CButton,
  CCol,
  CContainer,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilMagnifyingGlass } from '@coreui/icons';
import ContactUs from '../../../../components/contactUs/ContactUs';

const Page500 = () => {
  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={6}>
            <span className="clearfix">
              <h1 className="float-start display-3 me-4">500</h1>
              <h4 className="pt-3">Hmmm bizare !</h4>
              <p className="text-body-secondary float-start">
                Contactez le cabinet pour en savoir plus!
              </p>
            </span>
            <ContactUs />
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Page500;
