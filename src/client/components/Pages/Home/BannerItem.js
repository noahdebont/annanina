import React from 'react'
import { Link } from 'react-router-dom';

const BannerItem = ({item}) => {
    if (!item) return null;
    return (
        <Link className="home__item" to={item.getTemplateValueByField('link') || '/'}>
            <img src={item.getImageBySize()} alt=""/>
            <h2 className="home__item__title">
                {item.getTitle()}
            </h2>
        </Link>
    )
}

export default BannerItem
