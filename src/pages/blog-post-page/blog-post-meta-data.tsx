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
    el(BlogPostTitle, props.title),
    el(BlogPostAuthorName, props.author),
    el(BlogPostPublishDate, props.date),
    el(FluidRoundedImage, props.image)
  );

export default BlogPostMetadata;
