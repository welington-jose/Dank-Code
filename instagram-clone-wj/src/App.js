import './App.css';
import { db } from './firebase.js';
import { useEffect, useState } from 'react';
import Header from './Header';

function App() {

  const [user, setUser] = useState();
  const [posts, setPosts] = useState([]);
  const [comentario, setComentario] = useState('');

  useEffect(() => {

    db.collection('posts').orderBy('timestamp', 'desc').onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((document) => {
        return { id: document.id, info: document.data() }
      }))

    })
  }, []);

  function handleChangeComentario(event) {
    setComentario(event.target.value);
  }

  return (
    <div className="App">

      <Header setUser={setUser} user={user}></Header>

      {
        posts.map((val) => {
          return (
            <div className='postSingle'>
              <img src={val.info.image} />
              <p><b>{val.info.userName}</b> {val.info.titulo}</p>
              <form>
                <input id='comentario' type='text' placeholder='Adicione comentário...' value={comentario} onChange={handleChangeComentario}/>
                {
                  comentario.length > 0 &&(
                
                <button id="publicar-btn" class="publicar-btn">Publicar</button>
                  )}

              </form>
            </div>
          )
        })
      }

    </div>
  );


}

export default App;
