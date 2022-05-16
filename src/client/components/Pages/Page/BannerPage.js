import React from 'react'
import { Banners } from 'cq-components-react';
import BannerItem from '../Home/BannerItem';
import sliderStyles from '../Home/css/slider.css';


const BannerPage = (props) => {
    const { page } = props;
    if (!page) return null;

    return (
        <div className="banner-page">
            <Banners styles={sliderStyles} numberOfItemToDisplay="5" name={page.getTemplateValueByField('banner_slider_name')} itemComponent={BannerItem} />
        </div>
    )
}

export default BannerPage
