import ImageGalleryItem from '../ImageGalleryItem';
import styles from './imageGallery.module.css';

const ImageGallery = ({ images, onClick }) => (
  <ul className={styles.ImageGallery}>
    <ImageGalleryItem onClick={onClick} images={images} />
  </ul>
);

export default ImageGallery;
