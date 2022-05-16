import React from 'react';
import MainLayout from '../../MainLayout';
import BannerItem from './BannerItem';
import SliderItem from './SliderItem';
import sliderStyles from './css/slider.css';
import BodyClassName from 'react-body-classname';

import {
  Menu,
  Slider,
  Banners,
  withResponsive,
  Translations,
  Loader
} from 'cq-components-react';


const renderHomeMobile = () => {
  return (
    <BodyClassName className="is-home">
      <React.Fragment>
        <div className="home-mobile__menu-top">
          <Menu name="home:mobile:menu:top" showIcon={true} />
        </div>
        <div className="home-mobile__slider">
          <Slider
            name="home_slider_mobile"
            itemComponent={SliderItem}
            sliderConfig={{
              pagination: {
                el: '.swiper-pagination',
                type: 'bullets'
              }
            }}
          />
        </div>
      </React.Fragment>
    </BodyClassName>
  );
};

const Home = props => {
  const { isMobile, page } = props;

  return (

    <MainLayout
      metaTitle={page && page.getMetaTitle()}
      metaDescription={page && page.getMetaDescription()}
    >
      {!page ? (
        <Loader center={true} />
      ) : (
          <React.Fragment>
            {isMobile ? (
              renderHomeMobile()
            ) : (
                <div className="home">
                  <Banners
                    name="landing_page"
                    numberOfItemToDisplay="5"
                    itemComponent={BannerItem}
                    styles={sliderStyles}
                  />
                </div>
              )}
          </React.Fragment>
        )}
    </MainLayout>
  );
};

export default withResponsive(Translations(Home, ['home']));
