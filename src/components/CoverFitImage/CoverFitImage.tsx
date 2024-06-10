import { CSSProperties } from 'react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import clsx from 'clsx';

export interface CoverFitImageProps {
  width: number;
  height: number;
  src: string | StaticImport;
  alt: string;
  className?: string;
  imageStyle?: CSSProperties;
  noFill?: boolean;
}

export default function CoverFitImage({
  width,
  height,
  src,
  alt,
  className,
  imageStyle,
  noFill,
}: CoverFitImageProps) {
  return (
    <div
      className={clsx('relative overflow-hidden', className)}
      style={{ height, width }}
    >
      <Image
        src={src}
        alt={alt}
        fill={!noFill}
        draggable={false}
        style={imageStyle ?? { objectFit: 'cover' }}
      />
    </div>
  );
}
