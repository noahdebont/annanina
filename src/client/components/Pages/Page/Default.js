import React from 'react';
import { withResponsive, Menu } from 'cq-components-react';

const Default = ({ page }) => {
  if (!page) return null;

  const styles = {
    backgroundImage: `url(${page &&
      page.getImageByFieldAndSize('default_image', 'original') + '?w=2400'})`
  };

  return (
    <div className="default cf">
      {page.getImageByFieldAndSize('default_image', 'original') && (
        <div className="default__header" style={styles}>
          <h1 className="default__header__title">
            {page && page.getTemplateValueByField('default_title')}
          </h1>
        </div>
      )}
      <div className="default__main">
        {page.getTemplateValueByField('menu_name') && (
          <div className="default__menu">
            <Menu name={page.getTemplateValueByField('menu_name')} />
          </div>
        )}
        <div
          className="default__content"
          dangerouslySetInnerHTML={{
            __html: page.getTemplateValueByField('default_content')
          }}
        />
      </div>
    </div>
  );
};

export default withResponsive(Default);
