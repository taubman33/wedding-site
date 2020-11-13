
import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import Home from './components/Home'
import Reg from './components/Reg'
import Photos from './components/Photos'
import Info from './components/Info'



const routes = [
  {
    path: "/",
    component: Home,
  },

  {
    path: "/registry",
    component: Reg,
  },


  {
    path: "/photos",
    component: Photos,
  },

  {
    path: "/info",
    component: Info,
  }

]

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
    </div>
  );
}

export default App;
