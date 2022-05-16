import React from 'react';
import { ContactForm, withResponsive } from 'cq-components-react';

class Contact extends React.Component {
  render() {
    const { page, isMobile } = this.props;

    if (!page) return null;


    const styles = {
      backgroundImage: `url(${page.getImageByFieldAndSize(
        'header_bg_image',
        'original'
      ) + '?w=2400'})`
    };

    return (
      <div className="contact">
        {page.getImageByFieldAndSize('header_bg_image', 'original') &&
          <div className="contact__header" style={styles} >
            <h1 className="contact__header__title">
              {page.getTemplateValueByField('title')}
            </h1>
          </div>
        }
        <div className="contact__main">
          <div className="contact__form-container cf">
            {!isMobile &&
              <div className="contact__form-image">
                <img src={page.getImageByFieldAndSize('contact_form_image', 'huge')} alt="" />
              </div>
            }

            <div className="contact__form">
              <h3>
                {page && page.getTemplateValueByField('contact_form_title')}
              </h3>
              <div>
                <ContactForm page={page} />
              </div>
            </div>

            {isMobile &&
              <div className="contact__form-image">
                <img src={page.getImageByFieldAndSize('contact_form_image', 'original') + '&w=1000'} alt="" />
              </div>
            }
          </div>
          <div className="contact__main__container">
            <div
              className="contact__main__column"
              dangerouslySetInnerHTML={{
                __html: page.getTemplateValueByField('contact_info_left')
              }}
            />
            <div
              className="contact__main__column"
              dangerouslySetInnerHTML={{
                __html: page.getTemplateValueByField('contact_info_middle')
              }}
            />
            <div
              className="contact__main__column"
              dangerouslySetInnerHTML={{
                __html: page.getTemplateValueByField('contact_info_right')
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withResponsive(Contact);
