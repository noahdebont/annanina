import React from 'react';
import { Link } from 'react-router-dom';


const SliderItem = ({ item }) => {
    if (!item) return null;
    return (
        <div className="swiper-slide home-mobile__slider-item">
            <Link className="home-mobile_item" to={item.getTemplateValueByField('link') || '/'}>
                <img src={item.getImageBySize()} alt="" />
                <h2 className="home__item__title">
                    {item.getTitle()}
                </h2>
            </Link>
        </div>
    )
}

export default SliderItem
