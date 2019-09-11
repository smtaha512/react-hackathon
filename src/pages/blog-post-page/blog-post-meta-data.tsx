import * as React from 'react';

import BlogPostAuthorName, { BlogPostAuthorNameProps } from './blog-post-author-name';
import BlogPostPublishDate, { BlogPostPublishDateProps } from './blog-post-publish-date';
import BlogPostTitle, { BlogPostTitleProps } from './blog-post-title';
import FluidRoundedImage, { FluidRoundedImageProps } from '../../components/fluid-rounded-imge';

const el = React.createElement;

export interface BlogPostMetadataProps {
  date: BlogPostPublishDateProps;
  image: FluidRoundedImageProps;
  author: BlogPostAuthorNameProps;
  title: BlogPostTitleProps;
}

const BlogPostMetadata: React.SFC<BlogPostMetadataProps> = (props: BlogPostMetadataProps) =>
  el(
    'div',
    null,
    BlogPostTitle(props.title),
    BlogPostAuthorName(props.author),
    el('hr'),
    BlogPostPublishDate(props.date),
    el('hr'),
    FluidRoundedImage(props.image)
  );

export default BlogPostMetadata;
