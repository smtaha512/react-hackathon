import * as React from 'react';

function pad0AtStart(num: number) {
  return num.toString().padStart(2, '0');
}

export interface BlogPostPublishDateProps {
  date: string | Date;
  className: string;
}

const BlogPostPublishDate: React.SFC<BlogPostPublishDateProps> = (props: BlogPostPublishDateProps) => {
  const date = new Date(props.date);

  const dd = pad0AtStart(date.getDate());
  const mm = pad0AtStart(date.getMonth() + 1);
  const yyyy = date.getFullYear();

  const hh = pad0AtStart(date.getHours());

  const min = pad0AtStart(date.getMinutes());

  return React.createElement('p', { className: props.className }, `Posted on ${dd}/${mm}/${yyyy} at ${hh}:${min}`);
};

export default BlogPostPublishDate;
