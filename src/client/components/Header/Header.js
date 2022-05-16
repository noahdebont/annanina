import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import {
  Header,
  Menu,
  withResponsive,
  NavigationMobile,
  UspBanner,
  Translations,
  Newsletter
} from 'cq-components-react';

import iconAccount from '../../images/icon--account.svg';
import iconCart from '../../images/icon--cart.svg';
import iconWishlist from '../../images/icon--heart.svg';
import iconSearch from '../../images/icon--search.svg';
import logo from '../../images/anna-nina.svg';

import uspBannerStyles from './uspBannerCss/styles.css';

const navigationFooterMobile = page => {
  if (!page) return null;
  return (
    <React.Fragment>
      <div className="navigation-footer">
        <div className="navigation-footer__section">
          <a
            href={page.footer.getTemplateValueByField('social_url_1')}
            className="navigation-footer__social-item"
            target="_blank"
          >
            <img
              src={page.footer.getImageByFieldAndSize('social_icon_1', 'large')}
              alt=""
            />
          </a>
          <a
            href={page.footer.getTemplateValueByField('social_url_2')}
            className="navigation-footer__social-item"
            target="_blank"
          >
            <img
              src={page.footer.getImageByFieldAndSize('social_icon_2', 'large')}
              alt=""
            />
          </a>
          <a
            href={page.footer.getTemplateValueByField('social_url_3')}
            className="navigation-footer__social-item"
            target="_blank"
          >
            <img
              src={page.footer.getImageByFieldAndSize('social_icon_3', 'large')}
              alt=""
            />
          </a>
        </div>
        <div className="navigation-footer__section">
          <img
            src={page.footer.getImageByFieldAndSize('payments_image', 'large')}
            alt=""
          />
        </div>
      </div>
      <Newsletter />
    </React.Fragment>
  );
};

const Head = props => {
  const { isMobile, page } = props;

  if (isMobile) {
    return (
      <React.Fragment>
        <UspBanner
          name="usp_slider"
          numberOfItemToDisplay="10"
          sliderConfig={{
            speed: 750,
            autoplay: {
              delay: 4000
            }
          }}
          disableSlider={false}
          styles={uspBannerStyles}
        />
        <div className="header-mobile">
          <span
            className="header-mobile__back-link"
            onClick={() => props.history.goBack()}
          />
          <Link to="/" className="header-mobile__logo">
            <img src={logo} alt="" />
          </Link>
        </div>
        <NavigationMobile
          menuName1={'header'}
          menuName2={null}
          menuName3={'footer:1'}
          menuName4={null}
          menuName5={null}
          homeLink={'/account/tab-wishlist'}
          bottomPosition={navigationFooterMobile(page)}
        />
      </React.Fragment>
    );
  }

  return (
    <div className="header-wrapper">
      <Header
        hasMultiLanguage={true}
        iconAccount={iconAccount}
        iconCart={iconCart}
        iconSearch={iconSearch}
        hasSearch={false}
      >
        <div className="header__language-text">
          {page && page.common.getTemplateValueByField('language_text')}
        </div>
        <div className="">
          <Link className="header__store-locator" to={page && page.common.getTemplateValueByField('store_locator_url') || '/'}>
          {page && page.common.getTemplateValueByField('store_locator_title')}
          </Link>
        </div>
        <div className="header__logo-container">
          <Link to="/">
            <img src={logo} alt="TODO" />
          </Link>
        </div>
        <div className="header__menu">
          <Menu name="header" showLoader={false} />
        </div>
        <Link className="header__wishlist" to="/account/tab-wishlist">
          <img src={iconWishlist} alt="" />
        </Link>
      </Header>
    </div>
  );
};

export default withResponsive(
  withRouter(Translations(Head, ['common', 'footer']))
);
