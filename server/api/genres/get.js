import { api } from '../index.js'; // Import securely on server side only

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event)

    if (!query.type) {
      throw new Error('Type is required');
    }

    const result = await api.getGenres(query.type, query.lang);
    
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
