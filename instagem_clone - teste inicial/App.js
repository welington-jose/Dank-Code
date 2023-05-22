    import logo from './logo.svg'
    import './App.css'
    import {db} from './firebase.js'
    import {useEffect, useState} from 'react'

    function App() {

        const [user, setUser] = useState(null)
        useEffect(()=>{
            
        },[])
    }


        return(
            <div className="App">
                <div className="header">
                    <div className="header_logo">
                        <a href=''><img src='https://static.cdninstagram.com/rsrc.php/v3/yS/r/ajlEU-wEDyo.png'/></a>
                    </div>
                    <div className='header_loginForm'>

                    <form>
                        <input type="text" placeholder="Logim..."/>
                        <input type="password" placeholder="Senha..."/>
                        <input type="submit" name="acao" value="Logar!"/>.

                    </form>

                    </div>
                </div>

            </div>
        )

          