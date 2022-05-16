import React from 'react';

import {
  ProductsOverviewPage,
  ProductsOverview,
  withResponsive,
} from 'cq-components-react';
import PopMenu from './PopMenu';
import arrowBlack from '../../../images/arrow--black.svg';

import MainLayout from '../../MainLayout';

class Page extends React.Component {
  render() {
    return (
      <ProductsOverviewPage
        perPage="30"
        MainLayout={MainLayout}
        showTaxonTitle={false}
        showSortingPerPage={!this.props.isTablet}
        showSorting={true}
        hideSizes={true}
      >
        {this.props.isMobile &&
          <PopMenu />
        }
        <ProductsOverview
          typeName="ProductsOverview"
          iconArrow={arrowBlack}
          paginationOffset={this.props.isMobile ? 0 : 2}
          hasTaxonsTree={true}
        />
      </ProductsOverviewPage>
    );
  }
}

export default withResponsive(Page);
