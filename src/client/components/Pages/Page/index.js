import React from 'react';
import PageComponent from './PageSwitcher'

import {
  Page
} from 'cq-components-react';

import MainLayout from '../../MainLayout';

class PageContainer extends React.Component {
  render() {
    return (
      <Page
        MainLayout={MainLayout}
        Page={PageComponent}
      />
    );
  }

}

export default PageContainer;
