import './App.css'
import '../src/assets/data/user.json'
import data from './assets/data/user.json'

function App() {
  let user = data

  return (
    <div className='cards'>
      <div className="card__conteiner">
      </div>
      <div className="div-data">
        {
          user.length > 0 && user.map(function (valeus, index) {
            return (
              <div className='data' key={index}>
                <img src={valeus.image} className='img' alt="" />
                <p>{valeus.id}</p>
                <h2>{valeus.firstName}</h2>
                <h2>{valeus.lastName}</h2>
                <p>{valeus.phone}</p>
                <p>{valeus.email}</p>
                <div className='adres'>
                  <button className='btn'>{valeus.address.region} <br/>
                    {valeus.address.zip}
                  </button>
                </div>

                <div className='cars'>
                  {
                    valeus.cars.length >0 && valeus.cars.map(function(v, index){
                      return <button className='button' key={index}>{v}</button>
                    })         
                  }
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default App
