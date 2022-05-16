import React, { useEffect, useState } from 'react';
import { cqApi, libs } from 'cq-base-react';
import { Link } from 'react-router-dom';
import Swiper from 'react-id-swiper';
import { SliderProducts, InstaFeed } from 'cq-components-react';
import sliderCss from './css/slider.css';
import instaFeedStyles from './css/instaFeedStyles/styles.css';

import classNames from 'classnames';

const CategoryPage = props => {
  const { page } = props;
  const [menuItems, setMenuItems] = useState([]);
  const [swiper, updateSwiper] = useState(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    cqApi
      .menuApi()
      .getMenuByName(page.getTemplateValueByField('categories_menu_name'))
      .then(menu => {
        setMenuItems(menu.menu_items);
      })
      .catch(() => {});
  }, []);

  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
      setIsEnd(swiper.isEnd);
      setIsBeginning(swiper.isBeginning);
    }
  };

  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
    }
  };

  const navPrevClasses = classNames('swiper-button-prev', {
    'is-disabled': isBeginning
  });
  const navNextClasses = classNames('swiper-button-next', {
    'is-disabled': isEnd
  });

  const sliderParams = {
    slidesPerView: 'auto',
    spaceBetween: 40
  };

  if (!menuItems.length) return null;

  return (
    <div className="category-page">
      <div className="category-page__header-image-wrapper">
        <img
          src={page.getImageByFieldAndSize('header_image', 'huge')}
          className="category-page__header-image"
          alt=""
        />
      </div>

      <div className="category-page__menu">
        <Swiper {...sliderParams} getSwiper={updateSwiper}>
          {menuItems.map((item, index) => {
            return (
              <Link
                to={libs.getHref(item.link_to, item.type)}
                className="menu__item menu__item--has-image"
                key={index}
              >
                <div className="menu__item-link-image">
                  <img
                    src={libs.getImageByUrl(item.main_image)}
                    className="menu__item-image"
                  />
                </div>
                <div className="menu__item-link">{item.label}</div>
              </Link>
            );
          })}
        </Swiper>
        <span className={navPrevClasses} onClick={goPrev}></span>
        <span className={navNextClasses} onClick={goNext}></span>
      </div>
      <div className="category-page__products">
        <h3 className="category-page__title">
          {page.getTemplateValueByField('product_slider_title')}
        </h3>
        <SliderProducts
          name={page.getTemplateValueByField('product_slider_name')}
          styles={sliderCss}
        />
      </div>
      <div className="category-page__instagram">
        <h3 className="category-page__title">
          {page.getTemplateValueByField('instagram_title')}
        </h3>
        <InstaFeed styles={instaFeedStyles} limit="6" />
      </div>
    </div>
  );
};

export default CategoryPage;
