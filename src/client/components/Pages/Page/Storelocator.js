import React from 'react';
import { withResponsive, StoreLocator } from 'cq-components-react';

class StoreLocatorPage extends React.Component {
  render() {
    const { page } = this.props;

    if (!page) {
      return null;
    }

    return (
      <StoreLocator title={page.getTemplateValueByField('stores_title')}/>
    );
  }
}

export default withResponsive(StoreLocatorPage);