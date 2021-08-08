import React from 'react'

const MapFunction = () => {
  const   data=[
    {
      id: 1,
      name: 'Bruce',
      age: 30,
      skill: 'React'
    },
    {
      id: 2,
      name: 'Clark',
      age: 25,
      skill: 'Angular'
    },
    {
      id: 3,
      name: 'Diana',
      age: 28,
      skill: 'Vue'
    }
  ]
    return (
        <div>
            {data.map((items)=><li key={items.id}>{items.skill}</li>)}
        </div>
    )
}

export default MapFunction
