import React from 'react';
import { MainLayout, Modal, CookieMessage, Translations, UspBanner, Cart } from 'cq-components-react';
import Header from '../Header';
import Footer from '../Footer';
import uspBannerStyles from './uspBannerCss/styles.css';

const Main = props => {
  const {
    page
  } = props;

  return (
    <MainLayout
      {...props}
      header={<Header/>}
      footer={<Footer/>}
      cart={<Cart LineItemProps={{hasCustomOptions: true }}/>}
    >
    <UspBanner
        name="usp_slider"
        numberOfItemToDisplay="10"
        sliderConfig={{
          speed: 750,
          autoplay: {
            delay: 4000,
          },
        }}
        disableSlider={false}
        styles={uspBannerStyles}
      />
      <CookieMessage
        text={page && page.getTemplateValueByField('cookie_message')}
        buttonText={page && page.getTemplateValueByField('cookie_button_text')}
        projectName="annanina"/>
      <Modal/>
      {props.children}
    </MainLayout>
  )
};

export default Translations(Main, ['common']);
