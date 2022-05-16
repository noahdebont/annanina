import React, { useRef } from 'react';
import { withResponsive } from 'cq-components-react';

const Faq = ({ page }) => {
  const sections = page.getSections();

  const toggleAnswer = (questionContainerEl) => {
    questionContainerEl.current.classList.toggle('is-opened');
  }
  const styles = {
    backgroundImage: `url(${page &&
      page.getImageByFieldAndSize('faq_image', 'original') + '?w=2400'})`
  };

  return (
    <div className="faq">
      <div className="faq__header" style={styles}>
        <h1 className="faq__header__title">{page.getTemplateValueByField('title')}</h1>
      </div>
      {sections.map((section, index) => {
        const questionContainerEl = useRef();
        return (
          <div key={index} className="faq__question-container" ref={questionContainerEl}>
            <div onClick={() => toggleAnswer(questionContainerEl)} className="faq__question">{section.getTemplateValueByField('faq_question')}<span className="faq__question__plus"></span></div>
            <div className="faq__answer" dangerouslySetInnerHTML={{ __html: section.getTemplateValueByField('faq_answer') }} />
          </div>
        )
      })}
    </div>
  );
};

export default withResponsive(Faq);