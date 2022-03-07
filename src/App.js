
import styled from 'styled-components';
import './App.css';
import ContentListing from './ContentListing/Loadable';


const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;
function App() {
  return (
    <AppWrapper>
      <ContentListing /> 
    </AppWrapper>
  );
}

export default App;
