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
          el(NavLink, { activeClassName: 'active', className: 'nav-link', to: '/' }, 'Link')
        )
      )
    )
  );

{
  /* <nav class="navbar navbar-expand-sm navbar-light bg-light">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavId">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                <div class="dropdown-menu" aria-labelledby="dropdownId">
                    <a class="dropdown-item" href="#">Action 1</a>
                    <a class="dropdown-item" href="#">Action 2</a>
                </div>
            </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="text" placeholder="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
    </div>
</nav> */
}

export default Header;
