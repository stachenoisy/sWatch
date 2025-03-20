const lang = 'en-US';

export async function getVideo(videoID: string, type: string) {
    try {
        const response = await $fetch(`/api/video/get?id=${videoID}&type=${type}&lang=${lang}`);

        if ('data' in response) {
            return response.data;
        } else {
            throw new Error('Invalid response format');
        }
    } catch (error) {
        console.error('Get Video error:', error);
    }
}

export async function getWatchlist(userID: string) {
    try {
        const response = await $fetch(`/api/profile/watchlist?id=${userID}`);

        if ('data' in response) {
            return response.data;
        } else {
            throw new Error('Invalid response format');
        }
    } catch (error) {
      console.error('Get Watchlist error:', error);
    }
}

export async function getMovies(type: string, page: number) {
    try {
        const response = await $fetch(`/api/movies/get?type=${type}&page=${page}&lang=${lang}`);

        if ('data' in response) {
            return response.data;
        } else {
            throw new Error('Invalid response format');
        }
    } catch (error) {
        console.error('Get Movies error:', error);
    }
}

export async function getSeries(type: string, page: number) {
    try {
        const response = await $fetch(`/api/series/get?type=${type}&page=${page}&lang=${lang}`);

        if ('data' in response) {
            return response.data;
        } else {
            throw new Error('Invalid response format');
        }
    } catch (error) {
        console.error('Get Series error:', error);
    }
}

export async function getGenres(type: string) {
    try {
        const response = await $fetch(`/api/genres/get?type=${type}&lang=${lang}`);

        if ('data' in response) {
            return response.data;
        } else {
            throw new Error('Invalid response format');
        }
    } catch (error) {
        console.error('Get Genres error:', error);
        return [];
    }
}

export async function getProfile(userID: string) {
    try {
        const response = await $fetch(`/api/profile/get?id=${userID}`);

        if ('data' in response) {
            return response.data;
        } else {
            throw new Error('Invalid response format');
        }
    } catch (error) {
        console.error('Get Profile error:', error);
    }
}

export async function getRecentWatches(userID: string) {
    try {
        const response = await $fetch(`/api/profile/getRecentWatches?id=${userID}`);

        if ('data' in response) {
            return response.data;
        } else {
            throw new Error('Invalid response format');
        }
    } catch (error) {
        console.error('Get Profile error:', error);
    }
}