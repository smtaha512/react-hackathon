import React from 'react';
import { NavLink } from 'react-router-dom';

const el = React.createElement;
const Header: React.FC = () =>
  el(
    'nav',
    { className: 'navbar navbar-expand-sm navbar-light bg-light' },
    el(NavLink, { className: 'navbar-brand', to: '/' }, 'React Blog'),
    el(
      'button',
      {
        className: 'navbar-toggler d-lg-none',
        type: 'button',
        'data-toggle': 'collapse',
        'data-target': '#collpsibleNavId',
        'aria-controls': 'collapsibleNavId',
        'aria-expanded': 'false',
        'aria-label': 'Toggle navigation'
      },
      el('span', { className: 'navbar-toggler-icon' })
    ),
    el(
      'div',
      { className: 'collapse navbar-collapse', id: 'collapsibleNavId' },
      el(
        'ul',
        { className: 'navbar-nav mr-auto mt-2 mt-lg-0' },
        el(
          'li',
          { className: 'nav-item' },
          el(NavLink, { activeClassName: 'active', className: 'nav-link', to: '/' }, 'Home')
        ),
        el(
          'li',
          { className: 'nav-item' },
          el(NavLink, { activeClassName: 'active', className: 'nav-link', to: '/signup' }, 'Signup')
        )
      )
    )
  );
export default Header;
