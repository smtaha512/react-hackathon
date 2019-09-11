import React, { HTMLAttributes } from 'react';

import Header from '../../components/header/header';
import Card from '../../components/card/card';

const el = React.createElement;

const DUMMY_IMAGE_URL = 'http://lorempixel.com/200/100';
const CARDS = [1, 2, 3, 4, 5, 6].map(_ => ({
  title: `Dummy title ${_}`,
  text: `dummy text ${_}`,
  image: { src: DUMMY_IMAGE_URL },
  goTo: 'blog'
}));
const CARDS_WITH_COLS: React.DetailedReactHTMLElement<HTMLAttributes<HTMLDivElement>, HTMLDivElement>[] = CARDS.map(
  card => el('div', { className: 'col-4 my-5' }, Card(card))
);
const LandingPage: React.FC = () =>
  el(
    'div',
    null,
    el(Header),
    el(
      'div',
      { className: 'container' },
      el(
        'div',
        {
          className: 'row'
        },
        ...CARDS_WITH_COLS
      )
    )
  );

export default LandingPage;
