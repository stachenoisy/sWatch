import { api } from '../index.js'; // Import securely on server side only
import { stringifyQuery } from 'unjs/ufo';

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event)

    if (!query.id) {
      throw new Error('User ID is required');
    }

    const preresult = await api.profile.getProfile(query.id);

    const recentlyWatched = preresult.recentlyWatched;
    
    if (!recentlyWatched) {
      return {
        success: true,
        data: []
      };
    }

    const result = await api.video.getArray(recentlyWatched);
    
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
