import React from 'react';
import {
  LoginPage,
  Translations
} from 'cq-components-react';

import MainLayout from '../../MainLayout';

class Page extends React.Component {
  render() {
    const { page } = this.props;
    
    if (!page) {
      return null;
    }

    return (
      <LoginPage
        MainLayout={MainLayout}
        hasBackgroundImage={page.getImageByFieldAndSize('login_background_image', 'huge')}
        hasSocialLogin={true}
      />
    );
  }
}

export default Translations(Page, ['login_register']);