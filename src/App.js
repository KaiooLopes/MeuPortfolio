import { AppContainer, Body, GlobalStyle } from "./AppStyles";
import Header from "./components/Header";
import Apresentation from "./components/Apresentation";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <Header />
      <Body>
        <Apresentation />
        <Projects />
        <Footer />
      </Body>
    </AppContainer>
  );
}

export default App;
