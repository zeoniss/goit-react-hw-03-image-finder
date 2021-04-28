import styles from './imageGalleryItem.module.css';

const ImageGalleryItem = ({ images, onClick }) =>
  images.map(({ id, webformatURL, tags, largeImageURL }) => {
    const handleClick = () => {
      onClick(largeImageURL);
    };
    return (
      <li key={id} className={styles.ImageGalleryItem}>
        <img
          onClick={handleClick}
          src={webformatURL}
          alt={tags}
          className={styles.ImageGalleryItemImage}
          data-url={largeImageURL}
        />
      </li>
    );
  });

export default ImageGalleryItem;
