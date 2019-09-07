import * as React from 'react';

export interface BlogPostPublishDateProps {
  date: string | Date;
  className: string;
}

const BlogPostPublishDate: React.SFC<BlogPostPublishDateProps> = (props: BlogPostPublishDateProps) => {
  const date = new Date(props.date);

  const dd = date.getDate();
  const mm = date.getMonth() + 1;
  const yyyy = date.getFullYear();

  return React.createElement('p', { className: props.className }, `Posted on ${dd}/${mm}/${yyyy}`);
};

export default BlogPostPublishDate;
