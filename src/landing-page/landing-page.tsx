import React from 'react';
import Header from '../components/header/header';

const el = React.createElement;

const LandingPage: React.FC = () => el('div', null, el(Header), el('div', { className: 'container' }));
export default LandingPage;

{
  /* <div class="card text-left">
  <img class="card-img-top" src="holder.js/100px180/" alt="">
  <div class="card-body">
    <h4 class="card-title">Title</h4>
    <p class="card-text">Body</p>
  </div>
</div> */
}
