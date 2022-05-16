import React from 'react';
import Default from './Default';
import About from './About';
import Contact from './Contact';
import CategoryPage from './CategoryPage/CategoryPage';
import { InspirationsPage } from 'cq-components-react';
import StoreLocator from './Storelocator';
import BannerPage from './BannerPage';
import Faq from './Faq/Faq';

const PageSwitcher = ({ page }) => {
  if (!page) {
    return null;
  }
  switch (page.getTemplate()) {
    case 'contact':
      return <Contact page={page} />;
      break;
    case 'about':
      return <About page={page} />;
      break;
    case 'inspirations':
      return <InspirationsPage page={page} />;
      break;
    case 'category_page':
      return <CategoryPage page={page} />;
      break;
    case 'store_locator':
      return <StoreLocator page={page} />;
      break;
    case 'banner_page':
      return <BannerPage page={page} />;
      break;
    case 'faq':
      return <Faq page={page} />;
      break;
    default:
      return <Default page={page} />;
      break;
  }
};

export default PageSwitcher;
