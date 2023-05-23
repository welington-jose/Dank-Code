import logo from './logo.svg';
import './App.css';
import firebase from'./firebase'
import { useEffect, useState} from 'react';
import logoInstagram from './logo_instagram.png'

function App() {

  const [user, setUser] = useState(null)

  useEffect(()=>{
    
  },[])
  return (
    <div className="App">
      <div className='header'>
        <div className='header_logo'>
          <a href=''><img src={logoInstagram}/></a>
        </div>
        <div className='header_loginForm'>
          <form>
            <input type='text' placeholder='Login...'/>
            <input type='password' placeholder='Senha...'/>
            <input type='submit' name='acao' value="Logar!"/>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
