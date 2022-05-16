import React from 'react';
import { Translations, Menu, Newsletter, withResponsive } from 'cq-components-react';

const Footer = props => {
  const { page, isMobile } = props;

  if (!page || isMobile) {
    return null;
  }

  return (
    <div className="footer">
      <div className="footer__top">
        <div className="footer__top__section">
          <div className="quote">
            <img src={page.getImageByFieldAndSize('footer_logo', 'large')} alt="" className="footer_logo" />
            <div className="quote__text" dangerouslySetInnerHTML={{ __html: page.getTemplateValueByField('footer_brand_text') }} />
          </div>
        </div>
        <div className="footer__top__section">
          <div dangerouslySetInnerHTML={{ __html: page.getTemplateValueByField('footer_title_1') }} />
          <div className="footer__social">
            <a href={page.getTemplateValueByField('social_url_1')} className="footer__social-item" target="_blank">
              <img src={page.getImageByFieldAndSize('social_icon_1', 'large')} alt="" />
              <span>{page.getTemplateValueByField('social_title_1')}</span>
            </a>
            <a href={page.getTemplateValueByField('social_url_2')} className="footer__social-item" target="_blank">
              <img src={page.getImageByFieldAndSize('social_icon_2', 'large')} alt="" />
              <span>{page.getTemplateValueByField('social_title_2')}</span>
            </a>
            <a href={page.getTemplateValueByField('social_url_3')} className="footer__social-item" target="_blank">
              <img src={page.getImageByFieldAndSize('social_icon_3', 'large')} alt="" />
              <span>{page.getTemplateValueByField('social_title_3')}</span>
            </a>
          </div>
        </div>
        <div className="footer__top__section">
          <div >
            <Newsletter />
          </div>
        </div>
      </div>
      <div className="footer__main">
        <Menu name="footer:1" />
        <div className="main__section">
          <div className="footer__main__section">
            <div className="footer__main__title">
              <div className="copyrights">
                {page.getTemplateValueByField('copyrights_text')}
              </div>
            </div>
          </div>
          <div className="footer__main__section">
            <img src={page.getImageByFieldAndSize('payments_image', 'large')} alt="" className="payment_image" />
          </div>
        </div>
      </div>
      <div className="footer__bottom">
      </div>
    </div>
  );
};

export default withResponsive(Translations(Footer, ['footer']));
