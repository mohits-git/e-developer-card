import { useEffect, useState } from 'react'
import Card from './Card'

function App() {
    const [cards, setCards] = useState([])

    useEffect(() => {
        fetch('https://e-developer-card.onrender.com/api/cards')
            .then((res) => res.json())
            .then((data) => {
                setCards(data);
            })
    }, [])

  return (
    <>
    <div className='flex flex-col justify-center items-center'>
      {cards.map((card) => {
          return <Card key={card._id} card={card}/>
      })}
    </div>
    </>
  )
}

export default App
