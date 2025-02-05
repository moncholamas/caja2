import { useEffect, useState } from 'react'
import './App.css'
import CryptoJS from 'crypto-js';

function App() {
  const encryptedMsg = 'U2FsdGVkX18cbbMp+aXFAiRZPzRzTfNwmDdt8dPI7171oIMynylQ2v8sOAsACqQKkIOECNNeculSHhKKbXfvreI6r2hFQc/7utpkyqTGlEfnjioRz4Lv5emBiVmHjuLpkoJID55yBFLOsvBppVaYtSjC4+wN09RoXSg3KKPdWu3k5JNP+frr1BSz7S054tSMxSKETMYsFInUUxdUCHZqMI097FJwvGhDxxrrv1N1At2lNPgNkC2K1dfcoyaQe7iV9WamL45sOxoTpj16fis/5NUQ1Frs+wotLLbuts0Gq8p65nMCeDGW+41TK6PB21u7wTdS0slhQ9PfELb6dF8nTrDfEPOC7XK0U5QgqaVHtg/Yle/qeTlcGtgYejU2LMEkigkEOBiCVd+yiTLHZMLxbVwWkwmR2MJwau9h4vNzxLR049+I5QDmWY0eGDHqZDRhvrp2oDZ/ERh2cUMj08Y2myK72NlXgqtZri7Tjxto5TcYpJD98s0Ar3P7Y0S+rkPuGAkmFM/gUlhwHNs+HODR0PGmv6ahinjxrY86u5+oLezRVUJ4caavaqruXah7MBYRVGuYGc78ENi08bpoh3yLlK0vEVrmWHbGZkypS46WVvUhnf6KwL3wEIQJNthJ7xE/hcety9Y+og0TSGEjFhzfnZc/ymV9XNrz5nwLj6MZt4Hsb4z9FKRVlJ3/A9MQt4eqzw/k1dRtZP4J3c5DTu+E0HPBURU6nMC49MzRifRdYJ3sJV8htGy7G3NMxyULhU0MTqer4mTczwNnX+GJ4pMD/A=='

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
    let secretKey =  Object.values(formData).toString()
    console.log(secretKey)
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
              Array.from(Array(9).keys()).map( num => {
                return(
                  <>
                    <input 
                      key={num}
                      type='text' name={`c${num}`} className='input'
                      value={formData[`c${num}`]}
                      onChange={handleChange}
                      maxLength={1}>
                    </input>
                    {[2,5].includes(num) && <span> - </span> }
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
