import { api } from '../index.js'; // Import securely on server side only

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event)

    if (!query.type) {
      throw new Error('Type is required');
    }

    if (!query.page) {
      query.page = 1;
    }

    const result = await api.getMovies(query.type, query.page, query.lang);
    
    return {
      success: true,
      data: result
    };
  } catch (error) {
    return {
      success: false,
      error: error.message
    };
  }
});
