<<<<<<< HEAD
// /**
//  * @param { import("knex").Knex } knex
//  * @returns { Promise<void> }
//  */
=======
>>>>>>> origin
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('events').del()
  await knex('events').insert([
    {
      name: 'Tag',
      status: 'current',
      date: '14/7/2021',
      time: 'arvo',
      max: '6',
      IMG: 'CasualGame.jpg',
      description: 'tag at vic park, need 6 to make a game and run a few subs',
<<<<<<< HEAD
=======
      coordsX: -36.86447,
      coordsY: 174.7763,
      category: 'Casual Game',
      display_name:
        'Sydney, Council of the City of Sydney, New South Wales, Australia',
>>>>>>> origin
    },
    {
      name: 'Tag',
      status: 'current',
      date: '14/7/2021',
      time: 'arvo',
      max: '6',
      IMG: 'CasualGame.jpg',
      description: 'tag at vic park, need 6 to make a game and run a few subs',
<<<<<<< HEAD
=======
      coordsX: -36.86447,
      coordsY: 174.7763,
      category: 'Casual Game',
>>>>>>> origin
    },
    {
      name: 'Tag',
      status: 'current',
      date: '14/7/2021',
      time: 'arvo',
      max: '6',
      IMG: 'CasualGame.jpg',
      description: 'tag at vic park, need 6 to make a game and run a few subs',
      category: 'Casual Game',
    },
    {
      name: 'Tag',
      status: 'current',
      date: '14/7/2021',
      time: 'arvo',
      max: '6',
      IMG: 'CasualGame.jpg',
      description: 'tag at vic park, need 6 to make a game and run a few subs',
      category: 'Casual Game',
    },
    {
      name: 'Basketball',
      status: 'current',
      date: '14/7/2021',
      time: 'morning',
      max: '3',
      IMG: 'Sports.jpg',
      description: 'ball at Grey Lynn, need 3 to run against',
      category: 'Sports',
    },
    {
      name: 'Basketball',
      status: 'current',
      date: '14/7/2021',
      time: 'morning',
      max: '3',
      IMG: 'Sports.jpg',
      description: 'ball at Grey Lynn, need 3 to run against',
      category: 'Sports',
    },
    {
      name: 'Touch',
      status: 'current',
      date: '14/7/2021',
      time: 'morning',
      max: '4',
      IMG: 'Sports.jpg',
      description: 'touch at the park need 4 ',
      category: 'Sports',
    },
    {
      name: 'Basketball',
      status: 'current',
      date: '14/7/2021',
      time: 'morning',
      max: '3',
      IMG: 'Sports.jpg',
      description: 'ball at Grey Lynn, need 3 to run against',
      category: 'Sports',
    },
    {
      name: 'Basketball',
      status: 'current',
      date: '14/7/2021',
      time: 'morning',
      max: '3',
      IMG: 'Sports.jpg',
      description: 'ball at Grey Lynn, need 3 to run against',
      category: 'Sports',
    },
    {
      name: ' Laser Tag',
      status: 'previous',
      date: '12/7/2021',
      time: 'Arvo',
      max: '6',
      IMG: 'CasualGame.jpg',
      description:
        'Laser tag at vic park, need 6 to make a game and run a few subs',
      category: 'Casual Game',
    },
    {
      name: 'Basketball',
      status: 'previous',
      date: '12/7/2021',
      time: 'night',
      max: '3',
      IMG: 'Sports.jpg',
      description: 'ball at Grey Lynn, need 3 to run against',
      category: 'Sports',
    },
    {
      name: 'Touch',
      status: 'previous',
      date: '9/7/2021',
      time: 'arvo',
      max: '4',
      IMG: 'Sports.jpg',
      description: 'touch at the park need 4 ',
      category: 'Sports',
    },
    {
      name: 'Bull Rush',
      status: 'upcoming',
      date: '20/7/2021',
      time: 'morning',
      max: '6',
      IMG: 'Sports.jpg',
      description: 'Bull Rush at vic park, need 6 to make a game',
<<<<<<< HEAD
      attendees: 'bob'
=======
      category: 'Sports',
>>>>>>> origin
    },
    {
      name: 'Basketball',
      status: 'upcoming',
      date: '27/7/2021',
      time: 'arvo',
      max: '3',
      IMG: 'Sports.jpg',
      description: 'ball at Grey Lynn, need 3 to run against',
<<<<<<< HEAD
      attendees: 'bob'
=======
      category: 'Sports',
>>>>>>> origin
    },
    {
      name: 'Touch',
      status: 'upcoming',
      date: '30/7/2021',
      time: 'arvo',
      max: '4',
      IMG: 'Sports.jpg',
      description: 'touch at the park need 4 ',
<<<<<<< HEAD
      attendees: 'bob'
=======
      category: 'Sports',
>>>>>>> origin
    },
    {
      name: 'Crew',
      status: 'upcoming',
      date: '30/7/2021',
      time: 'arvo',
      max: '4',
      IMG: 'CardGame.jpg',
      description: 'Crew at Devacademy need 4 ',
<<<<<<< HEAD
      attendees: 'bob'
=======
      category: 'Card Game',
>>>>>>> origin
    },
    {
      name: 'Crew',
      status: 'upcoming',
      date: '30/7/2021',
      time: 'arvo',
      max: '4',
      IMG: 'CardGame.jpg',
      description: 'Crew at Devacademy need 4 ',
<<<<<<< HEAD
      attendees: 'bob'
=======
      category: 'Card Game',
>>>>>>> origin
    },
    {
      name: 'Crew',
      status: 'upcoming',
      date: '30/7/2021',
      time: 'arvo',
      max: '4',
      IMG: 'CardGame.jpg',
      description: 'Crew at Devacademy need 4 ',
<<<<<<< HEAD
      attendees: 'bob'
=======
      category: 'Card Game',
>>>>>>> origin
    },
    {
      name: 'Crew',
      status: 'upcoming',
      date: '30/7/2021',
      time: 'arvo',
      max: '4',
      IMG: 'CardGame.jpg',
      description: 'Crew at Devacademy need 4 ',
<<<<<<< HEAD
      attendees: 'bob'
=======
      category: 'Card Game',
>>>>>>> origin
    },
  ])
}
