import React, { useState } from 'react';
import {
  ProductDetailPageBase,
  withTranslation,
  withResponsive,
  ProductDetailRight,
  ProductDetailImages,
} from 'cq-components-react';

import MainLayout from '../../MainLayout';
import classNames from 'classnames';

const Page = ({ page, isMobile }) => {
  const [] = useState();
  return (
    <ProductDetailPageBase
      MainLayout={MainLayout}
      metaTitle={() =>
        eval(page && page.getTemplateValueByField('meta_title_pattern'))
      }
      useOnlyAllImages={true}
      hasBreadcrumbs={true}
      rightComponent={
        <ProductDetailRight
          hasQuantitySelector={true}
          hasQuantityLabel={true}
          hasStockInformation={true}
          hasCustomOptions={true}
          beforeOptionTypes={product => {
            if (isMobile) return null;
            return (
              <React.Fragment>
                <div className="product-detail__description">
                  {product.getProductProperty('description')}
                </div>
                <div className="product-detail__info-label">
                  {page && page.getTemplateValueByField('details_title')}
                </div>
                <div
                  className="product-detail__extra-description"
                  dangerouslySetInnerHTML={{ __html: product.getDescription() }}
                />
              </React.Fragment>
            );
          }}
          customTabs={(product, state, showTab) => {
            if (!isMobile) return null;
            
            const tabClasses1 = classNames(
              'product-detail__info-label',
              {'product-detail__info-label--inactive' : !state.showTab[1]}
            )
            
            const tabClasses2 = classNames(
              'product-detail__info-label',
              {'product-detail__info-label--inactive' : !state.showTab[2]}
            )

            return (
              <React.Fragment>
                <div className="product-detail__tabs-mobile">
                  <div
                    className={tabClasses1}
                    onClick={() => showTab(1)}
                  >
                    {page && page.getTemplateValueByField('details_title')}
                  </div>
                  <div
                    className={tabClasses2}                    
                    onClick={() => showTab(2)}
                  >
                    {page && page.getTemplateValueByField('description_title')}
                  </div>
                </div>
                {state.showTab[1] && (
                  <div className="product-detail__description">
                    {product.getProductProperty('description')}
                  </div>
                )}
                {state.showTab[2] && (
                  <div
                    className="product-detail__extra-description"
                    dangerouslySetInnerHTML={{
                      __html: product.getDescription()
                    }}
                  />
                )}
              </React.Fragment>
            );
          }}
        />
      }
      leftComponent={
        <ProductDetailImages
          useImagesSlider={true}
          sliderConfig={{
            speed: isMobile ? 300 : 750,
            simulateTouch: false
          }}
        />
      }
    />
  );
};

export default withResponsive(withTranslation(Page, ['pdp']));
