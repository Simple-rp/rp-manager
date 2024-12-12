import React, { Suspense, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { CSpinner, useColorModes } from '@coreui/react';
import './scss/style.scss';

// We use those styles to show code examples, you should remove them in your application.
import './scss/examples.scss';
import Page500 from './views/Docs/pages/page500/Page500';

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'));
const AdminLayout = React.lazy(() => import('./layout/AdminLayout'));

const App = () => {
  const { isColorModeSet, setColorMode } = useColorModes('coreui-free-react-admin-template-theme');
  const storedTheme = useSelector(state => state.theme);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.href.split('?')[1]);
    const theme = urlParams.get('theme') && urlParams.get('theme').match(/^[A-Za-z0-9\s]+/)[0];
    if (theme) {
      setColorMode(theme);
    }

    if (isColorModeSet()) {
      return;
    }

    setColorMode(storedTheme);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="pt-3 text-center">
            <CSpinner color="primary" variant="grow" />
          </div>
        }>
        <Routes>
          <Route exact path="/" name="Home" element={<Page500 />} />
          <Route path="/admin/*" name="Administration" element={<AdminLayout />} />
          <Route path="/:code/*" name="Home" element={<DefaultLayout />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
