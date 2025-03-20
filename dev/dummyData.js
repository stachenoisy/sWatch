export const movies = [
  { 
    id: 1, 
    type: 'movies', 
    title: 'The Tomorrow War', 
    thumbnail: 'https://placehold.co/400x225', 
    description: 'A family man is drafted to fight in a future war where the fate of humanity relies on his ability to confront the past.', 
    videoUrl: 'https://www.sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', 
    year: '2021', 
    duration: '2h 18m',
    rating: 'PG-13',
    director: 'Chris McKay',
    genres: ['Action', 'Adventure', 'Sci-Fi'],
    languages: ['English', 'Spanish'],
    cast: [
      { id: 1, name: 'Chris Pratt', role: 'Dan Forester' },
      { id: 2, name: 'Yvonne Strahovski', role: 'Colonel Muri Forester' },
      { id: 3, name: 'J.K. Simmons', role: 'James Forester' }
    ]
  },
  { 
    id: 2, 
    type: 'movies', 
    title: 'The Saturday War', 
    thumbnail: 'https://placehold.co/400x225', 
    description: 'A family man is drafted to fight in a future war where the fate of humanity relies on his ability to confront the past.', 
    videoUrl: 'https://www.sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', 
    year: '2019', 
    duration: '1h 18m',
    rating: 'PG-18',
    director: 'Chris McKay',
    genres: ['Action', 'Adventure', 'Sci-Fi'],
    languages: ['English', 'Spanish'],
    cast: [
      { id: 1, name: 'Chris Pratt', role: 'Dan Forester' },
      { id: 2, name: 'Yvonne Strahovski', role: 'Colonel Muri Forester' },
      { id: 3, name: 'J.K. Simmons', role: 'James Forester' }
    ]
  },
];

export const series = [
  { id: 11, type: 'series', title: 'The Boys', thumbnail: 'https://placehold.co/400x225', year: '2019', duration: '1h' },
  { id: 12, type: 'series', title: 'Invincible', thumbnail: 'https://placehold.co/400x225', year: '2021', duration: '45m' },
  { id: 13, type: 'series', title: 'The Wheel of Time', thumbnail: 'https://placehold.co/400x225', year: '2021', duration: '1h' },
  { id: 14, type: 'series', title: 'Reacher', thumbnail: 'https://placehold.co/400x225', year: '2022', duration: '57m' },
  { id: 15, type: 'series', title: 'Upload', thumbnail: 'https://placehold.co/400x225', year: '2020', duration: '30m' }
];

export const genres = [
  'All', 'Action', 'Comedy', 'Drama', 'Sci-Fi', 'Horror', 'Romance', 'Thriller', 'Animation'
];

export const profiles = {
  1: {
    id: 1,
    name: 'John Doe',
    email: 'dummy@mail.com',
    joined: '2022-01-01',
    stats: {
      watched: {
        movies: 5,
        series: 3,
        total: 1500
      },
      favorites: {
        movies: 2,
        series: 1,
        genres: ['Sci-Fi', 'Thriller', 'Drama', 'Action', 'Mystery']
      },
    },
    profileimage: 'https://placehold.co/400x400',
    watchlist: [ 14 ],
    recentlyWatched: [ 1, 2, 14 ],
    settings: {
      quality: 'HD',
      language: 'en',
    }
  }
}