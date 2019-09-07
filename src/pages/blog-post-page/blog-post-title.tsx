import * as React from 'react';

const el = React.createElement;
export interface BlogPostTitleProps {
  className?: string;
  headingLevel?: string;
  title: string;
}

const BlogPostTitle: React.SFC<BlogPostTitleProps> = (props: BlogPostTitleProps) => {
  const { title, className, headingLevel } = props;
  return el(headingLevel || 'h1', { className: className || 'mt-4' }, title || 'Post title');
};

export default BlogPostTitle;
