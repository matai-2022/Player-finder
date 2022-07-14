import request from "superagent";

export const getAllEvents = async () => {
  const events = await request.get('/api/v1/events')
  try {
    return events.body.events
  }
  catch (err) {
    console.error('getAllEvents failed')
  }
}