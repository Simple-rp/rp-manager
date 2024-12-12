import _docs from './_doc';
import CIcon from '@coreui/icons-react';
import { CNavItem } from '@coreui/react';
import { cilIndustry, cilSpeedometer } from '@coreui/icons';

const _admin = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: 'super-dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'danger',
      text: 'HOT',
    },
  },
  {
    component: CNavItem,
    name: 'Entreprises',
    to: 'entreprises',
    icon: <CIcon icon={cilIndustry} customClassName="nav-icon" />,
  },

  ...(true ? _docs : []),
];

export default _admin;
