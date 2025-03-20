export async function getVideo(videoID: string) {
    try {
        const response = await $fetch(`/api/video/get?id=${videoID}`);

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

export async function getMovies() {
    try {
        const response = await $fetch('/api/movies/get');

        if ('data' in response) {
            return response.data;
        } else {
            throw new Error('Invalid response format');
        }
    } catch (error) {
        console.error('Get Movies error:', error);
    }
}

export async function getSeries() {
    try {
        const response = await $fetch('/api/series/get');

        if ('data' in response) {
            return response.data;
        } else {
            throw new Error('Invalid response format');
        }
    } catch (error) {
        console.error('Get Series error:', error);
    }
}

export async function getGenres() {
    try {
        const response = await $fetch('/api/genres/get');

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