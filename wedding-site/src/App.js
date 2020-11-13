import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'

function App() {
  return (
    <div className="App">
      <Header/>
      <h1> Main</h1>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
