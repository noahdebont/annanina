import React from 'react';
import {
  ResetPasswordPage
} from 'cq-components-react';

import MainLayout from '../../MainLayout';

class Page extends React.Component {
  render() {
    return (
      <ResetPasswordPage
        MainLayout={MainLayout}
      />
    );
  }
}

export default Page;
