import React, { useEffect, useState } from 'react'
import TechItem from './TechItem'

const Techs = () => {
  const [techs, setTechs] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getTechs()
    //eslint-disable-next-line
  }, [])

  const getTechs = async () => {
    setLoading(true)

    const res = await fetch('/techs')
    const data = await res.json()

    setTechs(data)
    setLoading(false)
  }

  return (
    <div className='modal' id='tech-list-modal' style={modalStyle}>
      <ul className='collection with-header'>
        <li className='collection-header'>
          <h4 className='center'>List of Technicians</h4>
        </li>
        {!loading && techs.length === 0 ? (
          <p className='center'>No logs to show..</p>
        ) : (
          techs.map(tech => <TechItem tech={tech} key={tech.id} />)
        )}
      </ul>
    </div>
  )
}

const modalStyle = {
  width: '75%',
  height: '75%'
}

export default Techs
