import * as React from 'react';
import { Link } from 'react-router-dom';

export interface BlogPostAuthorNameProps {
  name: string;
  className: string;
}

const BlogPostAuthorName: React.SFC<BlogPostAuthorNameProps> = (props: BlogPostAuthorNameProps) =>
  React.createElement('p', { className: props.className }, React.createElement(Link, { to: '#' }, `by ${props.name}`));

export default BlogPostAuthorName;
