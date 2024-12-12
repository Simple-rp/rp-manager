import React, { Suspense } from 'react';
import { Navigate, Route, Routes, useParams } from 'react-router-dom';
import { CContainer, CSpinner } from '@coreui/react';

// routes config
import routes from '../routes';

const AppContent = () => {
  const { code } = useParams();
  const isAdmin = !code;

  return (
    <CContainer className="px-4" fluid>
      <Suspense fallback={<CSpinner color="primary" />}>
        <Routes>
          {routes.map((route, idx) => {
            return (
              route.element &&
              !!route.isAdmin == isAdmin && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  element={<route.element />}
                />
              )
            );
          })}
          <Route
            exact
            path="/*"
            element={<Navigate to={!isAdmin ? 'dashboard' : 'super-dashboard'} />}
          />
        </Routes>
      </Suspense>
    </CContainer>
  );
};

export default React.memo(AppContent);
