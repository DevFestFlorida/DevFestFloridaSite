module.exports = {
  statistics: [{
    counter: '100+',
    caption: 'Attendees'
  }, {
    counter: 2,
    caption: 'Parallel tracks'
  }, {
    counter: 1,
    caption: 'Tango Hackathon'
  }, {
    counter: '10+',
    caption: 'Sessions'
  }],
  callToAction: {
    text: 'Android DevFest Space Coast 2014 - Photos',
    buttonText: 'See how it was',
    video: {
      id: 't95z_HLMTmM',
      title: 'DevFest Florida 2016 - Highlights'
    }
  },
  galleryBlock: {
    title: 'Android DevFest Space Coast 2014 - Photos',
    photos: {
      big: '../images/backgrounds/AndroidDevFestSpaceCoast2014_AndroidTV.jpg',
      small: [
        '../images/backgrounds/AndroidDevFestSpaceCoast2014_Design-Winners.jpg',
        '../images/backgrounds/AndroidDevFestSpaceCoast2014_Auditorium.jpg'
      ]
    },
    albumUrl: 'https://goo.gl/photos/e4FPjXYXJYUh9YqSA'
  },
  signUpBlock: {
    title: 'Tickets on sale soon',
    details: 'Tickets will be going on sale soon. Sign up to be the first to get notified.'
  },
  ticketsBlock: {
    title: 'Tickets',
    tickets: [{
      name: 'Early Bird',
      price: '50',
      currency: 'USD',
      info: '*Before October 4th',
      soldOut: false
    }
    // , {
    //   name: 'Lazy Bird',
    //   price: 'TBA',
    //   currency: 'USD',
    //   info: '*After September 30',
    //   soldOut: false
    // }
  ],
    details: 'Tickets grant access to all speaker sessions, breakouts, code labs, coffee breaks, lunch, and after party. Accommodation and/or travel is NOT included in the ticket price.'
  },
  socialFeed: {
    source: '/data/tweets.json'
  },
  partnershipProposition: '/assets/DevFestFloridaPartnershipProposal.pdf'
};
