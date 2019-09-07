import * as React from 'react';

import Header from '../../components/header/header';
import BlogPostMetadata from './blog-post-meta-data';
import BlogPostBody from './blog-post-body';

const el = React.createElement;

export interface BlogPostPageProps {}

export interface BlogPostPageState {}

class BlogPostPage extends React.Component<BlogPostPageProps, BlogPostPageState> {
  state = {};
  render() {
    return el(
      'div',
      null,
      el(Header),
      el(
        'div',
        { className: 'container' },
        el(
          'div',
          { className: 'row' },
          el(
            'div',
            { className: 'col-lg-8' },
            el(BlogPostMetadata, {
              date: { date: new Date(), className: '' },
              image: { src: 'http://lorempixel.com/600/200' },
              author: { name: 'Taha', className: 'lead' },
              title: { title: '' }
            }),
            el('hr'),
            el(BlogPostBody, {
              body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, praesentium optio tempora consequatur pariatur ipsa adipisci provident aspernatur earum eum quaerat quia inventore saepe at fuga, odit aperiam sed? Quae?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, praesentium optio tempora consequatur pariatur ipsa adipisci provident aspernatur earum eum quaerat quia inventore saepe at fuga, odit aperiam sed? Quae?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, praesentium optio tempora consequatur pariatur ipsa adipisci provident aspernatur earum eum quaerat quia inventore saepe at fuga, odit aperiam sed? Quae?
                `
            })
          )
        )
      )
    );
  }
}

export default BlogPostPage;
