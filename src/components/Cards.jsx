import React from 'react';

function Cards() {
    return (
      <div className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
          <div className='grid md:grid-cols-3 max-w-[1240px] m-auto'>
              <Card img='https://c1.scryfall.com/file/scryfall-cards/small/front/5/0/50093179-2369-49db-a66d-ce3225363f5d.jpg?1645141461' cardName='Intruder Alarm' sets='Secret Lair Drop'/>
              <Card img="https://c1.scryfall.com/file/scryfall-cards/small/front/f/3/f35ec9da-f38b-4b7f-9eb5-090ca7755668.jpg?1645141660" cardName='Counter Spell' sets='Secret Lair Drop'/> 
              <Card img="https://c1.scryfall.com/file/scryfall-cards/small/front/3/e/3e3f0bcd-0796-494d-bf51-94b33c1671e9.jpg?1645302599" cardName='Propaganda' sets='Secret Lair Drop'/>
          </div>
          
          {/* Cards go here ----> */}
      </div>
  )
}

const Card = ({ img, cardName, sets }) => (
    <div className='flex flex-col justify-center md:items-start w-full px-2 py-2'>
      <div className='bg-grey-100 rounded overflow-hidden shadow-md flex-auto hover:bg-gray-400'>
          <img src={ img } alt={ cardName }/>
          <div>
              <span className="font-bold">{ cardName }</span>
              <span className='block text-gray-400 text-xs'>{ sets }</span>
          </div>
      </div>
    </div>
  )

export default Cards