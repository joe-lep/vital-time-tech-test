import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

export interface CoverFitImageProps {
  width: number;
  height: number;
  src: string | StaticImport;
  alt: string;
}

export default function CoverFitImage({
  width,
  height,
  src,
  alt,
}: CoverFitImageProps) {
  return (
    <div style={{ height, width, position: 'relative' }}>
      <Image
        src={src}
        alt={alt}
        fill
        draggable={false}
        style={{ objectFit: 'cover' }}
      />
    </div>
  );
}
