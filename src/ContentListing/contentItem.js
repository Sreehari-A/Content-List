import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Image from '../components/Img';
import AltImage from '../images/Slices/placeholder_for_missing_posters.png';
import styles from './styles';
import stylize from '../utils/stylize';

function ContentItem({ content, classes }) {
  const { 'poster-image': posterImage, name } = content;
  useEffect(() => {
    import(`../images/Slices/${posterImage}`).then(response =>
      setImageSrc(response.default),
    );
  }, [posterImage]);
  const [imageSrc, setImageSrc] = useState(AltImage);
  return (
    <div className={classes.listItem}>
      <div className={classes.imageWrapper}>
        <Image src={imageSrc} alt={AltImage} />
      </div>
      <div className={classes.contentTitle}>{name}</div>
    </div>
  );
}
ContentItem.propTypes = {
  content: PropTypes.object,
  classes: PropTypes.object,
};
export default stylize(ContentItem, styles);
