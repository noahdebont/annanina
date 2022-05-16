import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Translations,
  SliderProducts,
  Loader,
  withResponsive
} from 'cq-components-react';
import { cqApi } from 'cq-base-react';
import MainLayout from '../../../MainLayout';
import sliderCss from './css/slider.css';
import Swiper from 'react-id-swiper';
import _ from 'lodash';
import HTMLEllipsis from 'react-lines-ellipsis/lib/html';
import ReactPlayer from 'react-player';

const BlogDetail = props => {
  const [blogPage, setBlogPage] = useState(null);
  const [swiper, updateSwiper] = useState(null);
  const { params } = props.match;

  if (blogPage && params.slug !== blogPage.getSlug()) {
    setBlogPage(null);
  }
  useEffect(() => {
    getPage();
  }, [params.slug]);

  const { page, isMobile } = props;

  const getPage = () => {
    cqApi
      .pageApi()
      .getPageBySlug(params.slug)
      .then(page => {
        setBlogPage(page);
      })
      .catch(() => { });
  };

  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };

  if (!blogPage || !page) return <Loader center={true} />;

  const activeBlogIndex = _.findIndex(page.getSections(), section => {
    return section.getSlug() === params.slug;
  });

  const sliderParams = {
    slidesPerView: 'auto',
    initialSlide: activeBlogIndex
  };

  return (
    <MainLayout
      metaTitle={blogPage.getMetaTitle()}
      metaDescription={blogPage.getMetaDescription()}
    >
      <div className="blog-detail">
        <div className="blog-detail__container">
          <div className="blog-detail__date">
            <span>{blogPage.getTemplateValueByField('date')}</span>
          </div>
          <h3 className="blog-detail__title">
            {blogPage.getTemplateValueByField('blog_title')}
          </h3>
          <div className="blog-detail__header-image">
            <img
              src={blogPage.getImageByFieldAndSize('blog_header_image', 'huge')}
              alt=""
            />
          </div>

          <div
            className="blog-detail__text cf"
            dangerouslySetInnerHTML={{
              __html: blogPage.getTemplateValueByField('blog_text')
            }}
          />

          {(blogPage.getImageByFieldAndSize('blog_image_left', 'huge') ||
            blogPage.getImageByFieldAndSize('blog_image_right', 'huge')) && (
              <div className="blog-detail__images">
                <div className="blog-detail__image-container">
                  <img
                    src={blogPage.getImageByFieldAndSize(
                      'blog_image_left',
                      'huge'
                    )}
                    alt=""
                  />
                </div>
                <div className="blog-detail__image-container">
                  <img
                    src={blogPage.getImageByFieldAndSize(
                      'blog_image_right',
                      'huge'
                    )}
                    alt=""
                  />
                </div>
              </div>
            )}

          <div
            className="blog-detail__text cf"
            dangerouslySetInnerHTML={{
              __html: blogPage.getTemplateValueByField('blog_second_text')
            }}
          />

          {blogPage.getTemplateValueByField('youtube_url') &&
            <div className="blog-detail__video-wrapper">
              <div className="blog-detail__video-container">
                <ReactPlayer
                  url={blogPage.getTemplateValueByField('youtube_url')}
                  className="blog-detail__video"
                  loop
                  controls
                />
              </div>
            </div>
          }

          <div className="blog-detail__products">
            <h4 className="blog-detail__title">
              {blogPage.getTemplateValueByField('blog_slider_title')}
            </h4>
            <SliderProducts
              name={blogPage.getTemplateValueByField('blog_slider_name')}
              styles={sliderCss}
              disableSlider={false}
              sliderConfig={{ slidesPerView: 'auto' }}
            />
          </div>

          <div className="blog-detail__related">
            <h4 className="blog-detail__title">
              {blogPage.getTemplateValueByField('blog_related_title')}
            </h4>
            <Swiper {...sliderParams} getSwiper={updateSwiper}>
              {page.getSections().map((section, index) => {
                return (
                  <Link
                    className="blog-detail__related-item"
                    to={`/blog/${section.getSlug()}`}
                    key={index}
                  >
                    <img
                      src={section.getImageByFieldAndSize(
                        'blog_preview_image',
                        'large'
                      )}
                      alt=""
                    />
                    <div className="blog-detail__related-item__hover">
                      <div>
                        <h4>{section.getTemplateValueByField('blog_title')}</h4>
                        {!isMobile && (
                          <HTMLEllipsis
                            unsafeHTML={section.getTemplateValueByField(
                              'blog_text'
                            )}
                            maxLine="5"
                            ellipsis="..."
                            basedOn="words"
                          />
                        )}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </Swiper>
            <span className="swiper-button-prev" onClick={goPrev}>
              {page.getTemplateValueByField('slider_prev_text')}
            </span>
            <span className="swiper-button-next" onClick={goNext}>
              {page.getTemplateValueByField('slider_next_text')}
            </span>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default withResponsive(Translations(BlogDetail, ['blog']));
