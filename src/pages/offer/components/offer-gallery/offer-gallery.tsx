import Image, { ImageProps } from '../../../../ui/image/image';
import uniqid from 'uniqid';

type slideGalleryProsp = ImageProps;

export type OfferGalleryProps = {
  slides: ImageProps[];
};


export default function OfferGallery({
  slides,
}: OfferGalleryProps): JSX.Element {
  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {slides.map((slide: slideGalleryProsp) => (
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
