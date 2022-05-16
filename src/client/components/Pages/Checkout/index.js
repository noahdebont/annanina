import React from 'react';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import { actions } from 'cq-base-react';

import {
  CheckoutPage,
  Summary,
  PaymentMollie,
  DeliveryBase,
  AddressBase,
  CheckoutBase,
  AddressFormZipcode,
  Translations,
  Coupon
} from 'cq-components-react';

import MainLayout from '../../MainLayout';

const CheckoutOO = () => {
  return (
    <CheckoutBase
      Address={<AddressBase
        showAddressDetail={true}
        fields={<AddressFormZipcode countryId={416}/>}
        // hasGiftWrappingOption={true}
      />}
      Delivery={<DeliveryBase />}
      Payment={<PaymentMollie hasDisplayTotals={true}/>}
      leftSection={<Summary footer={<Coupon hideCouponFirst={true}/>}/>}
      rightSection={null}
      leftSectionClassName=''
      rightSectionClassName='hide'
      middleSectionClassName='checkout__middle cf' 
    />
  )
};

const goBack = (props) => {
    props.history.push({
      pathname: '/',
    });
    props.openCart();
};

const Page = (props) => {
  const { page } = props;
  return (
    <div>
      <span
        className="checkout__exit"
        onClick={() => goBack(props)}>
          {page && page.getTemplateValueByField('continue_shopping_text')}
        </span>
      <CheckoutPage
        MainLayout={MainLayout}
        Checkout={CheckoutOO}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    openCart: () => {
      dispatch(actions.toggleCart());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Translations(Page, ['checkout'])));
