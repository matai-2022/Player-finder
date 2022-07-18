import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { fetchEvent } from '../../../slices/AddEvent'
import { addEvent } from '../../apiFuncs/eventApi'

import Map from './Map'
import SearchBox from './SearchBox'

function AddEvent() {
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [max, setMax] = useState('')
  const [description, setDescription] = useState('')
  const dispatch = useDispatch()
  const { id } = useParams()
  const navigate = useNavigate()
  const [selectPosition, setSelectPosition] = useState(null)

  // const eventData = useSelector((state) => state.events)
  // const eventslah =  eventData.find((data) => data.event_id === Number(id))

  const token = useSelector((state) => state.user.token)

  function handleName(event) {
    setName(event.target.value)
  }

  function handleDate(event) {
    setDate(event.target.value)
  }

  function handleTime(event) {
    setTime(event.target.value)
  }

  function handleMax(event) {
    setMax(event.target.value)
  }

  function handleDescription(event) {
    setDescription(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    // setName('')

    addEvent(
      {
        event_id: id,
        name: name,
        date: date,
        time: time,
        max: max,
        description: description,
        status: 'upcoming',
        coords: [selectPosition.lat, selectPosition.lon],
      },
      token
    )
      .then(() => {
        dispatch(fetchEvent(id))
        navigate('/')
      })
      .catch((err) => {
        console.error(err.message)
      })
  }
  if (selectPosition != null) {
    //
    //console.log('letss gooo position', selectPosition.lat, selectPosition.lon)
  }

  return (
    <>
      <div>
        <div>
          <h1>ADD NEW EVENT</h1>
          <form className="input-wrapper">
            <input
              className="event-input"
              placeholder="Event Title"
              onChange={handleName}
            />
            <input
              type="date"
              className="date-input"
              placeholder="Event Date"
              onChange={handleDate}
            />
            <input
              type="time"
              className="time-input"
              placeholder="Event Time"
              onChange={handleTime}
            />
            <input
              className="max-input"
              placeholder="Max Participants"
              onChange={handleMax}
            />
            <input
              className="description-input"
              placeholder="Event Description"
              onChange={handleDescription}
            />
            <button
              className="submit-button"
              placeholder="Submit"
              onClick={handleSubmit}
            >
              Add Event
            </button>
          </form>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100vw',
            height: '100vh',
          }}
        >
          <div style={{ width: '50vh', height: '100%' }}>
            <Map selectPosition={selectPosition} />
          </div>
          <div style={{ width: '50vh' }}>
            <SearchBox
              selectPosition={selectPosition}
              setSelectPosition={setSelectPosition}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default AddEvent
