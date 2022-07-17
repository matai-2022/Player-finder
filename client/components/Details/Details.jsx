import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
// API IMPORT:
import { getEvtById } from '../apiFuncs/eventApi'

//imported components that we want in details
import Map from './Map'
import AttendButton from './AttendButton'
import EventDetails from './EventDetails'
import Events from '../EventsComponents/Events'

const Details = () => {
  const [event, setEvent] = useState({})
  const { id } = useParams()

  useEffect(async () => {
    const evt = await getEvtById(id)
    try {
      setEvent(evt)
    } catch {
      console.error('elo')
    }
  }, [])

  return (
    <section className="w-full h-[90vh] flex flex-col bg-slate-300 items-center">
      <div className="my-5">
        <h2 className="text-2xl font-semibold">{event.name}</h2>
        <p>{event.date}</p>
        <p>{event.time}</p>
      </div>
      <div className="w-full h-10/12 ">
        <Map />
      </div>
      <div>{event.description}</div>
      <AttendButton />
    </section>
  )
}

export default Details
