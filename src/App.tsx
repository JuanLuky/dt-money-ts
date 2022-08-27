import styled from 'styled-components';
import { GlobalStyle } from './assets/styles/global';

const Container = styled.div`
  background: var(--blue);
  color: var(--text-title);
  padding: 20px;

  h1 {
    color: red;
  }
`

export function App() {
  return (
    <Container>
      <GlobalStyle/>
      <h1> Helloo </h1>
    </Container>
  )
}

