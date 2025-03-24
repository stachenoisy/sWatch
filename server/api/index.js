const config = useRuntimeConfig();

/**
 * API Request handler
 * @param {string} endpoint - API endpoint
 * @param {Object} options - Fetch options
 * @returns {Promise<any>} - API response
 */
export async function fetchData(endpoint, options = {}) {
  try {
    const API_BASE_URL = config.apiUrl;
    const API_TOKEN = config.apiToken; // Get the API token from config
    
    const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_TOKEN}`,
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

const apiRoutes = {
  getMovies: (type, page, lang) => fetchData(`movies/${type}/${page}/${lang}`),
  getSeries: (type, page, lang) => fetchData(`series/${type}/${page}/${lang}`),
  getGenres: (type, lang) => fetchData(`genres/${type}/${lang}`),

  video: {
    getVideo: (id, type, lang) => fetchData(`video/get/${type}/${id}/${lang}`),
  },

  profile: {
    getProfile: (id) => fetchData(`profiles/get/${id}`),
  },
};

export const api = apiRoutes;