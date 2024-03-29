exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('events').del()
  await knex('events').insert([
    {
      name: 'Matai 2022 Graduation',
      status: 'current',
      date: '21/7/2021',
      time: 'afternoon',
      max: '75',
      IMG: 'Social.jpg',
      description:
        'Congrats Matai, we made it! Thank you Prue, Ahmad, Rich, Clementine, Alex and Sophia (+ Eli) and all our friends and family!!!!',
      coordsX: -36.8642358,
      coordsY: 174.7768566,
      category: 'Social',
      display_name:
        'Morgan Street, Newmarket, Auckland, Waitematā, Auckland, 1052, New Zealand',
      attendees: 'ThatsUs',
    },
    {
      name: 'Pick-up Basketball',
      status: 'current',
      date: '21/7/2021',
      time: 'afternoon',
      max: '4',
      IMG: 'Sports.jpg',
      description:
        'We (a group of 6ish) play on friday afternoons and are looking for about 4 people to join to play some full court 5v5',
      coordsX: -36.84687565,
      coordsY: 174.754210513381,
      category: 'Sports',
      display_name:
        'Victoria Park, Wynyard Quarter, Auckland, Waitematā, Auckland, New Zealand',
      attendees: 'Bob',
    },
    {
      name: 'Poker',
      status: 'current',
      date: '21/7/2021',
      time: 'afternoon',
      max: '1',
      IMG: 'CardGame.jpg',
      description: 'Friday night Poker at the Casino, level 4, 10K buy-in',
      coordsX: -37.78704055,
      coordsY: 175.28361254687968,
      category: 'Card Game',
      display_name:
        'SkyCity Casino, Garden Place, Hamilton Central, Hamilton, Waikato, 3247, New Zealand',
      attendees: 'Uncle Bob',
    },
    {
      name: 'Feed at the Cordis Hotel, 8',
      status: 'current',
      date: '21/7/2021',
      time: 'afternoon',
      max: '4',
      IMG: 'Food.jpg',
      description:
        'An open invite to eat and socialize over the international language of food',
      coordsX: -36.85741495,
      coordsY: 174.76362126533706,
      category: 'Food',
      display_name:
        'Cordis Hotel Auckland, 83, Symonds Street, Learning Quarter, Grafton, Auckland, Waitematā, Auckland, 1010, New Zealanda',
      attendees: 'Uncle Bobby',
    },
    {
      name: 'Halo Lan Party',
      status: 'current',
      date: '21/7/2021',
      time: 'afternoon',
      max: '2',
      IMG: 'VideoGame.jpg',
      description: 'Nostalgic',
      coordsX: -41.2887953,
      coordsY: 174.7772114,
      category: 'Video Game',
      display_name:
        'Wellington, Wellington City, Wellington, 6011, New Zealand',
      attendees: 'Uncle Rob',
    },
    //upcoming
    {
      name: 'Agile Conference',
      status: 'upcoming',
      date: '24/7/2021',
      time: 'noon',
      max: '100',
      IMG: 'Corporate.jpg',
      description:
        'An agile workshop in Christchurch to improve your teams work flow',
      coordsX: -43.530955,
      coordsY: 172.6366455,
      category: 'Corporate',
      display_name: 'Christchurch, Christchurch City, Canterbury, New Zealand',
      attendees: 'Susan',
    },
    {
      name: 'Cheif Keef listening party',
      status: 'upcoming',
      date: '8/8/2022',
      time: 'forever',
      max: '15',
      IMG: 'Music.jpg',
      description: 'Love Sosa, in Otago',
      coordsX: -45.39750525,
      coordsY: 170.1778918093833,
      category: 'Music',
      display_name: 'Otago, New Zealand',
      attendees: 'Uncle Bob',
    },
    {
      name: 'Monopoly NZ championship',
      status: 'upcoming',
      date: '12/12/2022',
      time: 'morning',
      max: '6',
      IMG: 'CasualGame.jpg',
      description: 'The best 6 players in NZ play for the top seed.',
      coordsX: -35.3522526,
      coordsY: 173.2547379,
      category: 'Casual Game',
      display_name:
        'Pawarenga, Kaikohe-Hokianga Community, Far North District, Northland, 0496, New Zealand',
      attendees: 'Ra',
    },
    {
      name: 'Diving',
      status: 'upcoming',
      date: '3/10/2022',
      time: 'morning',
      max: '2',
      IMG: 'Social.jpg',
      description:
        'We going diving.. need someone to hold sack while I dive. Will get 1/5 of spoils',
      coordsX: -35.1664105,
      coordsY: 173.1562074,
      category: 'Social',
      display_name:
        'Ahipara, Te Hiku Community, Far North District, Northland, 0481, New Zealand',
      attendees: 'Uncle Stinger',
    },
    {
      name: 'A night time jogging around the Bays',
      status: 'upcoming',
      date: '21/7/2021',
      time: 'afternoon',
      max: '10',
      IMG: 'Exercise.jpg',
      description:
        'An inclusive group that empowers & enables woman to run at night socially',
      coordsX: -36.848267,
      coordsY: 174.831802,
      category: 'Exercise',
      display_name: 'Mission Bay, Ōrākei, Auckland, 1071, New Zealand',
      attendees: 'Aunty Helen',
    },

    //past events
    {
      name: 'Mud Bath Hop',
      status: 'previous',
      date: '20/7/2019',
      time: 'morning',
      max: '6',
      IMG: 'Social.jpg',
      description: 'Getting that nice skin brav',
      coordsX: -38.1381493,
      coordsY: 176.252922,
      category: 'Social',
      display_name: 'Rotorua, Bay of Plenty, New Zealand',
      attendees: 'Uncle Charles',
    },
    {
      name: 'All you can eat Buffet run',
      status: 'previous',
      date: '1/1/2019',
      time: 'afternoon',
      max: '63',
      IMG: 'Food.jpg',
      description: 'All you can eat, competitive training',
      coordsX: -45.0321923,
      coordsY: 168.661,
      category: 'Food',
      display_name:
        'Queenstown, Queenstown-Lakes District, Otago, 9348, New Zealand ',
      attendees: 'Uncle Big',
    },
    {
      name: 'Snow Boarding',
      status: 'previous',
      date: '20/7/2021',
      time: 'arvo',
      max: '6',
      IMG: 'CasualGame.jpg',
      description: 'tag at vic park, need 6 to make a game and run a few subs',
      coordsX: -39.2812032,
      coordsY: 175.5642887,
      category: 'Sports',
      display_name:
        'Mount Ruapehu, Ruapehu District, Manawatu-Whanganui, New Zealand',
      attendees: 'Uncle Cob',
    },
    {
      name: 'Street Fighter 2 Tournament',
      status: 'previous',
      date: '3/3/2019',
      time: 'afternoon',
      max: '30',
      IMG: 'VideoGame.jpg',
      description: 'Ken for the win',
      coordsX: -46.6014038,
      coordsY: 168.3398682,
      category: 'Video Game',
      display_name: 'Bluff, Southland, 9814, New Zealand',
      attendees: 'Uncle Mob',
    },
    // {
    //   name: 'Halo Lan Party',
    //   status: 'current',
    //   date: '21/7/2021',
    //   time: 'afternoon',
    //   max: '2',
    //   IMG: 'VideoGame.jpg',
    //   description: 'Nostalgic',
    //   coordsX: -41.2887953,
    //   coordsY: 174.7772114,
    //   category: 'Video Game',
    //   display_name:
    //     'Wellington, Wellington City, Wellington, 6011, New Zealand',
    //   attendees: 'Uncle Rob',
    // },
  ])
}
