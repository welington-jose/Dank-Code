import './App.css';
import firebase from'./firebase'
import { useEffect, useState} from 'react';
import Header from './Header'
import logoInstagram from './logo_instagram.png'

function App() {

  const [user, setUser] = useState("Welington José")

  useEffect(()=>{
    
  },[])
  return (

    <div className="App">

      <Header setUser={setUser} user={user}> </Header>

    </div>

  );
}

export default App;
