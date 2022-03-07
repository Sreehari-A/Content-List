import NavBar from '../images/Slices/nav_bar.png';
import BackButton from '../images/Slices/Back.png';
import Search from '../images/Slices/search.png';
export default function styles() {
  return {
    listWrapper: {
      padding: '15px',
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      backgroundColor: '#000000',
    },
    listItem: {
      margin: '36px 15px',
    },
    imageWrapper: {
      display: 'flex',
      justifyContent: 'center',
      '& img': {
        width: '100%',
      },
    },
    contentTitle: {
      margin: '24px 0 18px 0',
      color: '#ffffff',
    },
    navBar: {
      background: `url(${NavBar})`,
      height: '40px',
      padding: '0 15px',
    },
    backButton: {
      background: `url(${BackButton})`,
      left: 0,
    },
    searchButton: {
      background: `url(${Search})`,
      right: 0,
    },
    navButton: {
      position: 'absolute',
      height: '20px',
      width: '20px',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      border: 0,
      '& img': {
        height: '100%',
      },
    },
    navBarItems: {
      position: 'relative',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
    },
    navBarSearchInput: {
      position: 'relative',
      width: '70%',
      left: '40px',
    },
  };
}
