import uniqid from 'uniqid';
import Image from '../../../../ui/image/image';

export type OfferGalleryProps = {
  images: string[];
};

export default function OfferGallery({
  images,
}: OfferGalleryProps): JSX.Element {
  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {images.map((slide) => (
          <div className="offer__image-wrapper" key={uniqid()}>
            <Image
              src={slide}
              alt='Photo studio'
              className='offer__image'
            />
          </div>
        ))}
      </div>
    </div>
  );
}
