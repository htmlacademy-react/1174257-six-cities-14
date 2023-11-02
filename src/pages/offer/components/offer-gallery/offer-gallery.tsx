import uniqid from 'uniqid';

import Image, { ImageProps } from '../../../../ui/image/image';

type SlideGalleryProps = ImageProps;

export type OfferGalleryProps = {
  slides: ImageProps[];
};


export default function OfferGallery({
  slides,
}: OfferGalleryProps): JSX.Element {
  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {slides.map((slide: SlideGalleryProps) => (
          <div className="offer__image-wrapper" key={uniqid()}>
            <Image
              src={slide.src}
              alt={slide.alt}
              className={slide.className}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
