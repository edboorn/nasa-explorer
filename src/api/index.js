import axios from 'axios'

const shareAbleUrl = "https://api.nasa.gov"

export const imageOfDay = async () => {
    try {
        // This may look janky, but its the naming of the data in the api
        const {data} = await axios.get(`${shareAbleUrl}/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}`);
        return data
    }
    catch (error) {
        return {error, ErrorMessage : "There has been an issue getting the Image of the day"}
    }
}

export const imageArchiveSearch = async (textQuery,StartDate,EndDate) => {
    try {
        const {data} = await axios.get(`https://images-api.nasa.gov/search?q=${textQuery}&year_start=${StartDate}&year_end=${EndDate}&media_type=image`)
        return {data};
    }
    catch(error) {
        return {error, ErrorMessage : "There has been an issue getting that image"}
    }
}

export const roverImageSearch = async () => {
    try {
        const {data} = await axios.get(`${shareAbleUrl}/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=${process.env.REACT_APP_API_KEY}`)
        return data;
    }
    catch(error) {
        return {error, ErrorMessage : "There has been an issue getting that image"}
    }
}