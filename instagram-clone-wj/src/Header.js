  import { useEffect, useState} from 'react';
  import logoInstagram from './logo_instagram.png';
  import { auth } from './firebase.js';
  




  function Header(props){  

      useEffect(()=>{
          props.setUser()
      },[])

      function criarConta(e){

        e.preventDefault();
        let email = document.getElementById('email-cadastro').value
        let userName = document.getElementById('userName-cadastro').value
        let senha = document.getElementById('senha-cadastro').value

        //Criar conta firebase
          auth.createUserWithEmailAndPassword (email,senha)
          .then((authUser)=>{
           authUser.user.updateProfile({
            displayName: userName
          })
          alert('Conta criada com sucesso!')
          let modal = document.querySelector('.modalCriarConta');
          modal.style.display = 'none'

        }).catch((error)=>{
          alert(error.messege);
        })
        
      }
      
      function abrirModalCriarConta(e){
        e.preventDefault();
        let modal = document.querySelector('.modalCriarConta')
        modal.style.display = 'block'

      }
      function fecharModalCriar(){
        let modal = document.querySelector('.modalCriarConta')
        modal.style.display = 'none'
      }
      return(
  <div className='header'>

          <div className='modalCriarConta'>
            <div className='formCriarConta'>
              <div onClick={()=>fecharModalCriar()} className='closeModarCriar'>X</div>
              <h2>Criar Conta</h2>
              <form onSubmit={(e)=>criarConta(e)}> 
                <input id='email-cadastro' type='text' placeholder='Seu email...'/>
                <input id='userName-cadastro' type='text' placeholder='Username...'/>
                <input id='senha-cadastro' type='password' placeholder='Senha...'/>
                <input type='submit' value='Criar Conta!'/>

              </form>
            </div>
          </div>
          <div className='center'>
          <div className='header_logo'>
            <a href=''><img src={logoInstagram}/></a>
          </div>
          {
            (props.user)?
            <div className='header_logadoInfo'> 
              <span>Olá,<b>{props.user}</b></span>
              <a href='#'>Postar</a>
            </div>
            :
            <div className='header_loginForm'>
            <form>
              <input type='text' placeholder='Login...'/>
              <input type='password' placeholder='Senha...'/>
              <input type='submit' name='acao' value="Logar!"/>
            </form>
              <div className='btn_criarConta'>
                <a onClick={(e)=>abrirModalCriarConta(e)} href='#'>Criar Conta</a>
              </div>
          </div>
          }
          
        </div>
        </div>
      )
  }
  export default Header;