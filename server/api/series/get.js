import { api } from '../index.js'; // Import securely on server side only

export default defineEventHandler(async (event) => {
  try {
    const result = await api.getSeries();
    
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
