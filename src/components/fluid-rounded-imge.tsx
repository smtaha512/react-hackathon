import * as React from 'react';

export interface FluidRoundedImageProps {
  alt?: string;
  src: string;
}

const FluidRoundedImage: React.SFC<FluidRoundedImageProps> = (props: FluidRoundedImageProps) =>
  React.createElement('img', { className: 'img-fluid rounded', src: props.src, alt: props.alt });

export default FluidRoundedImage;
