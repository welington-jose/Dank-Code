import logo from './logo.svg'
import './App.css'
import {db} from './firebase.js'
import {useEffect} from 'react'

function App() {
    useEffect(()=>{
        console.log(db)
    },[])
}

function App(){
    return(
        <div className="App">

        </div>
    )
}
    export default App