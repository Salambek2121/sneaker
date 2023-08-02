import { useState } from 'react'
import './App.css'

function App() {

  const [detail, setDetail] = useState(false)
  const [bascet,setBascet] = useState(false)

  const hendleDetail = () => {
    setDetail(!detail)
  }

  const hendleBascet = () => {
    setBascet(true)
  }

  const hendleDelete = () => {
    setBascet(false)
  }
  return (
    <div className="card">
      <div className='foto'>

        <img src="http://intocode.ru/d/react-project-1/images/1.jpg" alt="" />

      </div >
      <div className='rod'>
        <div className='price'>
          <p>nike SB</p>
          <p> $120</p>
        </div >
        <div className='roddetail'>
          <div className='button'>
            <button onClick={() => hendleDetail( )}>Детали</button>
          </div>
          {detail &&
          <div className='lorem'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          </div>
          }
        </div>
      </div>
<div className='top'>
      <div  className='text'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore explicabo </p>
      </div>
      <div className='bascet'>
        <button  onClick={hendleBascet}>
         { bascet ? "уже в корзине" : 'добавить в корзину'} </button>
         {bascet ? <div onClick={hendleDelete} className='delete'>удалить из корзины</div> : null}
      
        
         </div>
      
      </div>
    </div>
  )
}

export default App