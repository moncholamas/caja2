import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [show, setShow] = useState(null)

  
  const mostrar = () => {

    
    if ( ! desencrypt.includes('drive') ){
      // elegiste mal las letras intenta de nuevo
    } else {
      // hola
    }
    console.log('hola')
    console.log('https://drive.google.com/file/d/0Bwy8Lg0BGCCQSFZLSzJkS2pnSUU/view?usp=sharing&resourcekey=0-q2d1mX0YPVNUtl1lc_bjLg')
  }

  useEffect(()=>{

  },[show])
  return (
    <>
      <div className='step_1'>
        <span>Ingresa el código de tu pulsera.</span>
          <div className="card">
            <input type='text' name="c1" className='input' maxLength={1}></input>
            <input type='text' name="c2" className='input' maxLength={1}></input>
            <input type='text' name="c3" className='input' maxLength={1}></input>
            -
            <input type='text' name="c4" className='input' maxLength={1}></input>
            <input type='text' name="c5" className='input' maxLength={1}></input>
            <input type='text' name="c6" className='input' maxLength={1}></input>
            -
            <input type='text' name="c7" className='input' maxLength={1}></input>
            <input type='text' name="c8" className='input' maxLength={1}></input>
            <input type='text' name="c9" className='input' maxLength={1}></input>

          </div>
          <div className="card">
            <button onClick={mostrar}>
              Abrir Caja
            </button>
          </div>
      </div>
      <div className='step_2'>
        <p className="read-the-docs">
          Este regalo es anónimo
        </p>
        <img src='https://drive.google.com/thumbnail?id=0Bwy8Lg0BGCCQSFZLSzJkS2pnSUU/'></img>
      </div>
    </>
  )
}

export default App
