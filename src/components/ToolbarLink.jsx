import React from 'react';
import { NavLink } from 'react-router-dom';
 
export const ToolbarLink = ({ children, ...rest }) => 
    <NavLink {...rest} activeClassName="mdc-tab--active">{children}</NavLink>;