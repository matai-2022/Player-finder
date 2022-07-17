import React, { useState } from 'react'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'

const NOMINATIM_BASE_URL = 'https://nominatim.openstreetmap.org/search?'

// const params = {
//   q: '',
//   format: 'json',
//   addressdetails: 'addressdetails',
// }

export default function SearchBox() {
  const [searchText, setSearchText] = useState('')
  console.log(searchText)
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}>
          <OutlinedInput
            style={{ width: '100%' }}
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value)
            }}
          />
        </div>
        <div
          style={{ display: 'flex', alignItems: 'center', padding: '0px 20px' }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              //Search
              const params = {
                q: searchText,
                format: 'json',
                addressdetails: 1,
                polygon_geojson: 0,
              }
              const queryString = new URLSearchParams(params).toString()
              const requestOptions = {
                method: 'GET',
                redirect: 'follow',
              }
              fetch(`${NOMINATIM_BASE_URL}${queryString}`, requestOptions)
                .then((response) => response.text())
                .then((result) => {
                  console.log(JSON.parse(result))
                })
                .catch((err) => console.log('err', err))
            }}
          >
            Search
          </Button>
        </div>
      </div>
      <div>
        <List component="nav" aria-label="main mailbox folders">
          {[1, 2, 3, 4, 5].map((item) => {
            return (
              <div key={item}>
                <ListItem button>
                  <ListItemIcon>
                    <img
                      src="./images/placeholder.png"
                      alt="Placeholder"
                      style={{ width: 36, height: 36 }}
                    />
                  </ListItemIcon>
                  <ListItemText primary="Inbox" />
                </ListItem>
                <Divider />
              </div>
            )
          })}
        </List>
      </div>
    </div>
  )
}