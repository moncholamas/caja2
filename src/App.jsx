import { useEffect, useState } from 'react'
import './App.css'
import CryptoJS from 'crypto-js';

function App() {
  const encryptedMsg = 'U2FsdGVkX18jcmxLEIzjw2oK3vZw3HCgemi/DjSu1XQGcUUgX0f9JXIMKPbJN9dEPqEmkVG0G4YjCwYFNuoDecsi1plTLuoQXInL2wH7D3PyAbh5Bj9MiADvJLIayLXl0spUQLf6ZG1FiJvgN3oLSbXwBm6xMZTTI8x4i27r2UGBid8K7BNrBGNLsfe3G9/Os9N4HjrPrkof9MW0vvW30LW8VpJbiqwWgEYFZXNNK/9ZSJFZ6eSm1c2SzIlx5mXy44AJ04MHFz72Q7K2Ra6pbOvvjVNwFFVl2XXPjJT77EVz+qYstkyhx0kQUgEQBJ+Q+OZe9jpgD1o0cdLywfspCGvnDRLpaGBfEYDl4K2qjEPV3iUwC+a3uX/f9+G+pOsbeJiNlRiskbicZohYGfJ85NHTyC3MPS/QtFbRxAzpWawbgqH5gtR/hML9VFE9hHyKktaeXzyLEr4eYzDFx7sL/zWrDQXuFOxdxKgxOK0aRNnlgM5HvGiFHW4AJuettc6lxV2zvkVlQfmmhJ6wXJBrFq8oJcXJLfRIFfic8WNsw1nShTY3LcKLTYnlAVItxEfjnDboFvFJfqVaOs4YharqtGSMzYg2soXRwbib30BBQEyoPTg2zG/raCDVHSazJpYZjXCwEdmouftYA8UlDDkCEU+KzLEfzxIu1mO8orrfzhpCzULhFz79KXXrb4ouu1lYsHjgU4urPXHvzFm6WGjt/zZETf+D1/1QIKuVNNpcYsxi212fZM53KjM49IidJFVLKHTkTGtfTylLKT91DB/3Rg=='

  const [error, setError] = useState(false)
  const [step, setStep] = useState(1)
  const [message, setMessage] = useState({
    title: '',
    intro: 'Casi, este no es el mensaje',
    href: '#',
    click: '',
    show: ''
  })

  const [formData, setFormData] = useState({
    c1:"",
    c2:"",
    c3:"",
    c4:"",
    c5:"",
    c6:"",
    c7:"",
    c8:"",
    c9:""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value
    });
  };

  
  const mostrar = () => {
    let secretKey =  Object.values(formData).join('')
    try {
      const decryptedText = decryptText(encryptedMsg, secretKey);
      
      if (decryptedText.includes('1ZyEdUdnGDoU')){
        const partes = decryptedText.split('#####');
        setMessage({
          title: partes[0],
          intro: partes[1],
          href: partes[2],
          click: partes[3],
          show: 'ok'
        })
        setStep(2)
        setError(false)
      }
    } catch (error) {
      setError(true)
    }
  }




  function decryptText (cipherText, secretKey){
    const bytes = CryptoJS.AES.decrypt(cipherText, secretKey);
    return bytes.toString(CryptoJS.enc.Utf8);
  }

  return (
    <>
      {step ===1 && <div className='step_1'>
        <div className="card">
        <p>
          Cómo soy un programador honesto (despues de ser un bachero despedido), este pequeño programita no recopila datos, así que no sé quién entró, si fuiste vos o alguien más.
        </p>
        <span>Esto solo lo vas a poder ver si: </span>
        <div className='container_list'>
          <ul>
            <li><span className='ico'>🎠</span> No se sabe si te gusta más ir al super o jugar sudoku</li>
            <li><span className='ico'>🎲</span> Confundis el 6 con el 9 en los juegos de mesa</li>
            <li><span className='ico'>🌻</span> Si tuvieras una margarita se llamaria Mariana</li>
            <li><span className='ico'>🥘</span> Tu plato favorito son las bombitas de papa</li>
            <li><span className='ico'>🧚‍♀️</span> Te sabes todos los dialogos y canciones de Disney</li>
            <li><span className='ico'>🗝</span> Tenes/tuviste una pulsera/llavero con una frase mal escrita</li>
          </ul>
        </div>
        
        <p>Si llegas hasta aquí y dijiste soy yo, poné la frase de la pulserita por aquí abajo. (una letra en cada cuadrito) </p>
        <p>Si ud no está entendiendo nada, no ande de metiche</p>

        </div>
        <div className="card con_fondo">
            {
              [1,2,3,4,5,6,7,8,9].map( num => {
                return(
                  <>
                    <input 
                      key={num}
                      type='text' name={`c${num}`} className='input'
                      value={formData[`c${num}`]}
                      onChange={handleChange}
                      maxLength={1}>
                    </input>
                    {[3,6].includes(num) && <span> - </span> }
                  </>
                )
              })
            }

          </div>
          <div className="card">
            <button onClick={mostrar}>
              Abrir Cajita 📦
            </button>
          </div>
          {error && 
          <div>
            <div className="read-the-docs">
              Que no sea metiche 🙃 
            </div>
          </div>
          }
      </div>}
      
      {step===2 && message.show==='ok' && 
      <div className='step_2'>
        <div className="read-the-docs">
          <h1>{message.title}</h1>
          <p>{message.intro}</p>
          <a href={message.href} target='_blank'>{message.click}</a>
        </div>
      </div>
      }
    </>
  )
}

export default App
