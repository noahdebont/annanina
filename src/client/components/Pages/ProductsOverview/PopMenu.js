import React from 'react';

import {Menu} from 'cq-components-react';
import _ from 'lodash';

const PopMenu = ({taxonModel}) => {
    if (!taxonModel) return null;
    
    const customField = taxonModel.getCustomFieldByTemplate('menu', 'tpl_connect_a_menu');
    const menuName = _.get(customField, 'name');

    if (!menuName) return null;

    return (
        <div className="home-mobile__menu-top">
          <Menu name={menuName} showIcon={true} />
        </div>
    )
}

export default PopMenu;
