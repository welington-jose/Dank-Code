import { useEffect, useState} from 'react';
import logoInstagram from './logo_instagram.png'


function Header(props){  

    useEffect(()=>{
        props.setUser()
    },[])
    
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
            <form>
              <input type='text' placeholder='Seu email...'/>
              <input type='text' placeholder='Username...'/>
              <input type='password' placeholder='Senha...'/>
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