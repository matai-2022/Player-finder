import { imageOverlay } from 'leaflet'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { fetchEvent } from '../../../slices/AddEvent'
import { addEvent } from '../../apiFuncs/eventApi'

import Map from './Map'
import SearchBox from './SearchBox'

function AddEvent({ setVisible }) {
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [max, setMax] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const dispatch = useDispatch()
  const { id } = useParams()
  const navigate = useNavigate()
  const [selectPosition, setSelectPosition] = useState(null)

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

  function handleCategory(event) {
    setCategory(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    addEvent(
      {
        event_id: id,
        name: name,
        date: date,
        time: time,
        max: max,
        description: description,
        status: 'upcoming',
        coordsX: JSON.parse(selectPosition.lat),
        coordsY: JSON.parse(selectPosition.lon),
        category: category,
        IMG: `${category}.jpg`.replace(/\s/g, ''),
        display_name: selectPosition.display_name,
      },
      token
    )
      .then(() => {
        dispatch(fetchEvent(id))
        setVisible(false)
      })
      .catch((err) => {
        console.error(err.message)
      })
  }

  return (
    // Container for form

    <>
      <div className=" w-[85vw] self-start text-2xl font-semibold border-b border-black border-solid mb-4 md:space-y-40 md:w-full">
        <h1 className="mb-4 md:text-4xl text-[#00AEFF]">Create Event</h1>
      </div>
      {/* title goes here */}

      <form className="flex flex-col items-center w-full">
        <div className=" mb-2 md:w-[30vw]">
          {/* image and title goes here */}
          <input
            className="w-full border rounded-md lg:w-[30vw]"
            placeholder="Event Title"
            onChange={handleName}
          />
        </div>

        <div className="flex flex-col items-start md:flex-row md:w-full md:justify-evenly md:my-8">
          {/* date time and max container */}
          <input
            className="border rounded-md"
            type="date"
            placeholder="Event Date"
            onChange={handleDate}
          />
          <input
            className="border rounded-md"
            type="time"
            placeholder="Event Time"
            onChange={handleTime}
          />
          <input
            type="number"
            className="border rounded-md"
            placeholder="Enter # of participants"
            onChange={handleMax}
          />

          <div>
            <select
              className="border rounded-md"
              placeholder="Category"
              onChange={handleCategory}
            >
              <option selected disabled hidden>
                Choose category
              </option>
              <option value="Sports" name="Sports">
                Sports
              </option>
              <option value="Card Game" name="CardGame">
                Card Game
              </option>
              <option value="Casual Game" name="CasualGame">
                Casual Game
              </option>
              <option value="Video Game" name="VideoGame">
                Video Game
              </option>
              <option value="Music" name="Music">
                Music
              </option>
              <option value="Food" name="Food">
                Food
              </option>
              <option value="Exercise" name="Exercise">
                Exercise
              </option>
              <option value="Arts" name="Arts">
                Arts
              </option>
              <option value="Social" name="Social">
                Social
              </option>
              <option value="Corporate" name="Corporate">
                Corporate
              </option>
              <option value="Networking" name="Networking">
                Networking
              </option>
            </select>
          </div>
          <input
            className="border rounded-md"
            placeholder="Event Description"
            onChange={handleDescription}
          />
        </div>

        {/* container with map and search */}

        <div className="w-[80vw] h-auto flex flex-col items-center md:flex-row-reverse md:items-end ">
          <Map selectPosition={selectPosition} />
          {/* search container */}
          <div className="flex flex-col items-center md:items-start w-full md:w-7/12 md:self-start">
            <SearchBox
              className=""
              setSelectPosition={setSelectPosition}
              selectPosition={selectPosition}
            />
          </div>
        </div>

        <button
          className="mb-10 mt-5 mx-auto  text-white bg-sky-500 hover:bg-sky-400 w-[200px] h-[40px] shadow-xl rounded-md p-2 lg:w-[12vw] lg:h-[5vh]"
          placeholder="Submit"
          onClick={handleSubmit}
        >
          Create Event
        </button>
      </form>
    </>
  )
}

export default AddEvent
