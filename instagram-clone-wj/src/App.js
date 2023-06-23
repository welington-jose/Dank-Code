import './App.css';
import { db, auth} from './firebase.js';
import { useEffect, useState } from 'react';
import Header from './Header';
import Post from './Post';

function App() {

  const [user, setUser] = useState();
  const [posts, setPosts] = useState([]);
  const [comentario, setComentario] = useState('');

  useEffect(() => {

    auth.onAuthStateChanged((val)=>{
      setUser(val?.displayName || null);
    })
      
    })

    db.collection('posts').orderBy('timestamp', 'desc').onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((document) => {
        return { id:document.id, info:document.data() }
      }))

    })
  

  function handleChangeComentario(event) {
    setComentario(event.target.value);
  }

 

  return (
    <div className="App">

      <Header setUser={setUser} user={user}></Header>

      {
        posts.map((val) => {
          
          return(
            <Post user={user} info={val.info} id={val.id}/>
            
          )
        })
      }

    </div>
  );


}

export default App;
