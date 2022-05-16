import React from 'react';
import {
  NotFoundPage
} from 'cq-components-react';

import MainLayout from '../../MainLayout';

class Page extends React.Component {

  render() {
    return (
      <NotFoundPage
        MainLayout={MainLayout}
      />
    );
  }

}

export default Page;
