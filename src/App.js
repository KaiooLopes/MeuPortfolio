import "./App.css";
import Header from "./components/Header";
import Apresentation from "./components/Apresentation";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="body">
        <Apresentation />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;
