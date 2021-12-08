import BoxProject from './pages/BoxProject';
import styled from 'styled-components'

const AppStyled =styled.div`
  width: 80%;
  min-width: 350px;
  margin: 0 auto;
  box-sizing: border-box;
  border : 1px solid #000;

  ul {
    list-style: none;
    padding: 0;
  }
`

function App() {
  return (
    <AppStyled>
      <BoxProject />
    </AppStyled>
  );
}

export default App;
