
import './App.css';
import Images from './img/g.png';
import Dots from './img/dots.png';

function App() {
  return (
    <div className="App">


      <nav className="navbar">
        <ul className="navelements">
          <li>Gmail</li>
          <li>Images</li>
          <li className="btndotscontainer">
            <img className="dots" src={Dots} alt="" />
          </li>
          <li><button>Login</button></li>
        </ul>
      </nav>

      <div className="googlecontainer">
        <img className="google" src={Images} alt="" />
      </div>


      <div className="searchcontainer">
        <input type="search" name="" id="searchgoogle" placeholder="Search" />
      </div>


      

      <div className="btncontainerarea">
            <div className="buttoncontainer">
                <button>Google Search</button>
                <button>I'm Feeling Lucky</button>
            </div>
      </div>


      <div className="linkcontainer">
        <p>Google offered in: </p> <a href="#">English (United States</a>
      </div>



    </div>
  );
}

export default App;
