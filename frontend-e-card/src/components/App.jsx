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
      <div className='flex justify-center'>
      <div className='grid grid-cols-1 gap-1 lg:grid-cols-2'>
      {cards.map((card) => {
          return <Card key={card._id} card={card}/>
      })}
      </div>
      </div>
      </>
  )
}

export default App
