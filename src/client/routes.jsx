import React from 'react';
import { Switch, Route } from 'react-router'
import { LogoutPage, PrivateRoute } from "cq-components-react";

import Home from './components/Pages/Home/Home';
import ProductsOverview from './components/Pages/ProductsOverview';
import ProductDetailPage from './components/Pages/ProductDetail';
import AccountPage from "./components/Pages/Account";
import LoginPage from "./components/Pages/Login";
import ResetPasswordPage from "./components/Pages/ResetPassword";
import NotFoundPage from "./components/Pages/NotFound";
import Page from './components/Pages/Page';
import Checkout from './components/Pages/Checkout';
import Blog from './components/Pages/Page/Blog/Blog';
import BlogDetail from './components/Pages/Page/Blog/BlogDetail';

export const routes =
<Switch>
  <Route key="home" exact path="/" component={Home} />
  <Route key="productDetailPage" path="/product/:slug/:variantId?" component={ProductDetailPage} />
  <Route key="productOverviewPage" path="/products/:pageNumber/:category+" component={ProductsOverview} />
  <Route key="search" path="/search/:pageNumber/:keywords" component={ProductsOverview} />
  <PrivateRoute key="account" path="/account/:selectedTab?" component={AccountPage} redirectURL="/login"/>
  <Route key="login" path="/login" component={LoginPage} />
  <Route key="logout" path="/logout" component={LogoutPage} />
  <Route key="resetPassword" path="/reset-password/:token?" component={ResetPasswordPage} />
  <Route key="page" path="/page/:slug" component={Page}/>
  <Route key="blogDetail" path="/blog/:slug" component={BlogDetail}/>
  <Route key="blog" path="/blog/:slug?" component={Blog}/>
  <Route key="checkout" path="/checkout/:step?/:orderNumber?/:orderToken?" component={Checkout} />
  <Route key="notFound" exact={true} path='*' component={NotFoundPage} />
</Switch>;


