/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useState, useEffect, memo } from 'react';
import PropTypes from 'prop-types';
// import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import InfiniteScroll from 'react-infinite-scroll-component';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from '../utils/injectReducer';
import { useInjectSaga } from '../utils/injectSaga';
import reducer from './reducer';
import saga from './saga';
import { loadContents } from './actions';
import { selectContents } from './selectors';
import NavBar from './navBar';
import ContentItem from './contentItem';
import stylize from '../utils/stylize';
import styles from './styles';

const key = 'contentList';

function ContentList({ content, fetchContent, classes }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  const [pageNum, setPageNum] = useState(1);
  const [listData, setListData] = useState([]);
  const [searchText, setSearchText] = useState('');
  useEffect(() => {
    const updatedList = [];
    Object.keys(content).forEach(pageNo => {
      updatedList.push(...content[pageNo]);
    });
    const filteredList = updatedList.filter(item =>
      item.name.toLowerCase().includes(searchText.toLowerCase()),
    );
    setListData(filteredList);
  }, [content, searchText]);
  useEffect(() => {
    fetchContent(pageNum);
  }, [fetchContent, pageNum]);
  // const { [pageNum]: { listData: listItems = [] } = {} } = contents;
  const fetchData = () => {
    setPageNum(pageNum + 1);
  };
  const resetSearchResults = () => setSearchText('');
  return (
    <div>
      <NavBar
        searchText={searchText}
        resetSearchResults={resetSearchResults}
        setSearchText={setSearchText}
      />
      <InfiniteScroll
        dataLength={listData.length}
        className={classes.listWrapper}
        next={fetchData}
        hasMore
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {listData.map(item => (
          <ContentItem content={item} />
        ))}
      </InfiniteScroll>
    </div>
  );
}

ContentList.propTypes = {
  content: PropTypes.array,
  fetchContent: PropTypes.func,
  classes: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  content: selectContents(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchContent: payload => dispatch(loadContents(payload)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default stylize(
  compose(
    withConnect,
    memo,
  )(ContentList),
  styles,
);
