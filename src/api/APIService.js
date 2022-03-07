const MockAPIService = {
  fetchContentListMock: pageNo => {
    let fileName = '';
    switch (pageNo) {
      case 1:
        fileName = 'CONTENTLISTINGPAGE-PAGE1';
        break;
      case 2:
        fileName = 'CONTENTLISTINGPAGE-PAGE2';
        break;
      case 3:
        fileName = 'CONTENTLISTINGPAGE-PAGE3';
        break;
      default:
        break;
    }
    if (fileName) {
      return import(`./${fileName}.json`).then(response => response.page);
    }
    return null;
  },
};
export default MockAPIService;
