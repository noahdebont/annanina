import React from 'react';
import { withResponsive } from 'cq-components-react';

const About = props => {
  const { page } = props;
  
  return (
    <div className="about cf">
      <div className="about__main" >
        <div className="about__left"> 
          <img className="about__left-img" src={page.getImageByFieldAndSize('about_image', 'original')}/>
        </div>
        <div
          className="about__right"
          dangerouslySetInnerHTML={{
            __html: page && page.getTemplateValueByField('description')
          }}
        />
      </div>
    </div>
  );
};

export default withResponsive(About);
