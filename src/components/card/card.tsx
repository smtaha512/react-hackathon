import * as React from 'react';
import { Link } from 'react-router-dom';

const el = React.createElement;
export const CardImage = (props: { src: string; alt?: string }) =>
  el('img', { className: 'card-img-top', src: props.src, alt: props.alt });
export const CardBodyTitle = (props: { title: string }) => el('h4', { className: 'card-title' }, props.title);
export const CardBodyText = (props: { text: string }) => el('p', { className: 'card-text' }, props.text);
export const CardBody = (props: { title: string; text: string }) =>
  el(
    'div',
    { className: 'card-body' },
    el(CardBodyTitle, { title: props.title }),
    el(CardBodyText, { text: props.text })
  );

const Card = (props: { image: { src: string; alt?: string }; title: string; text: string; goTo: string }) => {
  if (props.goTo) {
    return el(
      'div',
      { className: 'card text-left' },
      el(Link, { to: props.goTo }, el(CardImage, props.image), el(CardBody, { title: props.title, text: props.text }))
    );
  }
  return el(
    'div',
    { className: 'card text-left' },
    el(CardImage, props.image),
    el(CardBody, { title: props.title, text: props.text })
  );
};
export default Card;
