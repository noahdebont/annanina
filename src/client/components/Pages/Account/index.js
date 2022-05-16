import React from 'react';
import {
  AccountPage
} from 'cq-components-react';

import MainLayout from '../../MainLayout';

class Page extends React.Component {
  render() {
    return (
      <AccountPage
        MainLayout={MainLayout}
      />
    );
  }
}

export default Page;
