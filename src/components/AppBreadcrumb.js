import React from 'react';
import { useLocation } from 'react-router-dom';

import routes from '../routes';

import { CBreadcrumb, CBreadcrumbItem } from '@coreui/react';
import { capitalize } from '../helper/StringFormatter';

const AppBreadcrumb = () => {
  const currentLocation = useLocation().pathname;

  const getRouteName = (pathname, routes) => {
    const currentRoute = routes.find(route => route.path === pathname);
    return currentRoute ? currentRoute.name : false;
  };

  const getBreadcrumbs = location => {
    const breadcrumbs = [];
    console.log(location.split('/'));
    const locs = location.split('/');
    locs
      .filter(e => e !== '')
      .forEach(l => {
        breadcrumbs.push(capitalize(l).replace('-',' '));
      });
    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs(currentLocation);

  return (
    <CBreadcrumb className="my-0">
      {/* <CBreadcrumbItem href="/">Home</CBreadcrumbItem> */}
      {breadcrumbs.map((breadcrumb, index) => {
        return (
          <CBreadcrumbItem active={index === breadcrumbs.length - 1} key={index}>
            {breadcrumb}
          </CBreadcrumbItem>
        );
      })}
    </CBreadcrumb>
  );
};

export default React.memo(AppBreadcrumb);
