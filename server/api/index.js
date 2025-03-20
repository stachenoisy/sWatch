import * as dummyData from '~/dev/dummyData';
import get from './genres/get';

const config = useRuntimeConfig();
const isDevelopment = () => process.env.NODE_ENV === 'development';

/**
 * API çağrılarını işleyen genel fonksiyon
 * @param {string} endpoint - API endpoint
 * @param {Object} options - Fetch ayarları
 * @returns {Promise<any>} - API yanıtı
 */
export async function fetchData(endpoint, options = {}) {
  if (isDevelopment()) {
    console.log(`[DEV MODE] Fetching dummy data for: ${endpoint}`);

    // Eğer profil endpointi ise
    if (endpoint.startsWith('profiles')) {
      const profile = endpoint.split('/');
      const profileId = profile[1];
      const secondEndpoint = profile[2];

      return secondEndpoint ? dummyData.profiles[profileId][secondEndpoint] : dummyData.profiles[profileId];
    }

    // Eğer video endpointi ise
    if (endpoint.startsWith('video')) {
      const request = endpoint.split('/');
      const requestType = request[1];

      if (requestType === 'get') {
        const videoId = request[2];
        const allVideos = [...dummyData.movies, ...dummyData.series];
        return allVideos.find(movie => movie.id == videoId) || {};
      }

      if (requestType === 'getArray') {
        const allVideos = [...dummyData.movies, ...dummyData.series];
        const videoIds = JSON.parse(options.body).ids;
        return allVideos.filter(movie => videoIds.includes(movie.id));
      }

      return {};
    }
    
    // Development mod aktifse, dummy verileri döndür
    return dummyData[endpoint];
  }
  
  // Development mod kapalıysa, gerçek API'yi çağır
  try {
    const API_BASE_URL = config.public.apiUrl;
    const API_TOKEN = config.apiToken; // Get the API token from config
    
    const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_TOKEN}`, // Add the token to headers
        ...options.headers
      },
      ...options
    });
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
}

// API çağrılarını yöneten predefined fonksiyonlar
export const api = {
  getMovies: () => fetchData('movies'),
  getSeries: () => fetchData('series'),
  getGenres: () => fetchData('genres'),

  video: {
    getVideo: (id) => fetchData(`video/get/${id}`),
    getArray: (ids) => {
      return fetchData('video/getArray', {
        body: JSON.stringify({ ids }),
      })
    },
  },

  profile: {
    getProfile: (id) => fetchData(`profiles/${id}`),
    getWatchList: (id) => fetchData(`profiles/${id}/watchlist`), 
  },
};
