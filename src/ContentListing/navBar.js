import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import stylize from '../utils/stylize';
import styles from './styles';

function NavBar({
  resetSearchResults,
  setSearchText,
  searchText = '',
  classes,
}) {
  const [showInput, setShowInput] = useState(false);
  const inputElement = useRef();
  const showSearchInput = () => {
    setShowInput(true);
    inputElement.current.focus();
  };
  useEffect(() => {
    if (showInput) {
      inputElement.current.focus();
    }
  }, [showInput]);
  const moveBack = () => {
    setShowInput(false);
    resetSearchResults();
  };
  const onChangeInput = event => setSearchText(event.target.value);
  return (
    <div className={classes.navBar}>
      <div className={classes.navBarItems}>
        <button
          type="button"
          className={`${classes.backButton} ${classes.navButton} `}
          onClick={moveBack}
        />
        {showInput && (
          <input
            ref={inputElement}
            className={classes.navBarSearchInput}
            value={searchText}
            onChange={onChangeInput}
          />
        )}
        <button
          type="button"
          className={`${classes.searchButton} ${classes.navButton} `}
          onClick={showSearchInput}
        />
      </div>
    </div>
  );
}
NavBar.propTypes = {
  classes: PropTypes.object,
  resetSearchResults: PropTypes.func,
  setSearchText: PropTypes.func,
  searchText: PropTypes.string,
};
export default stylize(NavBar, styles);
