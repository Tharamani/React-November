import logo from './logo.svg';
import './App.css';
import Greet from './Greet';
import Registration from './Registration';
import Comment from './Comment';
import Login from './Login';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
        <Greet></Greet><br/>

        <Registration></Registration><br/>

        <Comment></Comment><br/>

        <Login></Login><br/>

        <Footer></Footer>

      </header>
    </div>
  );
}

export default App;
