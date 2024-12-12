import React, { useEffect } from 'react';
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index';
import { useParams } from 'react-router-dom';
import { codes } from '../constants/config/entreprises';
import Page404 from '../views/Docs/pages/page404/Page404';

const DefaultLayout = () => {
  const { code } = useParams();

  if (!codes.includes(code.toUpperCase())) return <Page404 />;
  return (
    <div>
      <AppSidebar/>
      <div className="wrapper d-flex flex-column min-vh-100">
        <AppHeader />
        <div className="body flex-grow-1">
          <AppContent />
        </div>
        <AppFooter />
      </div>
    </div>
  );
};

export default DefaultLayout;
