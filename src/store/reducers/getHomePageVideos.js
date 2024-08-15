import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {parseData} from "../../utils/parseData";

const API_KEY = process.env.REACT_APP_YOUTUBE_DATA_API_KEY;

export const getHomePageVideos = createAsyncThunk(
    "youtube/App/searchPageVideos",
    async(isNext,{getState}) =>{
        const { youtubeApp : { nextPageToken: nextPageTokenFromState,videos},
    } = getState();

    // const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?maxResults=20&q=drop%20x%20out&key=${API_KEY}&part=snippet&type=video&${isNext ? `pageToken=${nextPageTokenFromState}`:""}`);
    const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?chart=mostPopular&maxResults=20&key=${API_KEY}&part=snippet&type=video&order=date&${
    isNext ? `pageToken=${nextPageTokenFromState}` : ""} `);

    // const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?maxResults=20&q=drop%20x%20out&key=AIzaSyBSkqI909YJoBnfUhkxglMRPXIVp0oDit8&part=snippet&type=video`);
    
    // console.log(response.data.items);

    const items = response.data.items;
    // console.log(items);

    const parsedData = await parseData(items);
    const newNextPageToken = response.data.nextPageToken;

    return {parsedData:[...videos,...parsedData],nextPageToken:newNextPageToken, }

    }
)