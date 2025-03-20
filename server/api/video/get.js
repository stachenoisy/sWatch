import { api } from '../index.js'; // Import securely on server side only

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event)

    if (!query.id) {
      throw new Error('Video ID is required');
    }

    const result = await api.video.getVideo(query.id);
    
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
