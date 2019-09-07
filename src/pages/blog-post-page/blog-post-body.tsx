import * as React from 'react';
export interface BlogPostBodyProps {
  body: string;
}

const BlogPostBody: React.SFC<BlogPostBodyProps> = (props: BlogPostBodyProps) => {
  return React.createElement(
    'div',
    null,
    ...props.body
      .split('\n')
      .map((para, idx) => React.createElement('p', { className: `${idx === 0 ? 'lead' : ''}` }, para))
  );
};

export default BlogPostBody;
