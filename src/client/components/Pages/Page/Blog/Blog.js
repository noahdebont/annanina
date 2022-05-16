import React, { useEffect, useState } from 'react';
import { Translations, withResponsive, Loader } from 'cq-components-react';
import { Link } from 'react-router-dom';
import MainLayout from '../../../MainLayout';
import BlogDetail from './BlogDetail';
import HTMLEllipsis from 'react-lines-ellipsis/lib/html';

const Blog = props => {
  const { page, isMobile } = props;

  const { params } = props.match;
  if (params.slug) return <BlogDetail />;

  return (
    <MainLayout
      metaTitle={page && page.getMetaTitle()}
      metaDescription={page && page.getMetaDescription()}
    >
      {!page ? (
        <Loader center={true} />
      ) : (
        <div className="blog-overview">
          {page.getSections().map((section, index) => {
            return (
              <Link
                className="blog-overview__item"
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
                <div className="blog-overview__item__hover">
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
        </div>
      )}
    </MainLayout>
  );
};

export default withResponsive(Translations(Blog, ['blog']));
