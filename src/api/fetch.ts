import axios from 'axios'
import { IResp } from '../types/types'

async function getPhotos(page: number, show: number) {
    const res = await axios.get<IResp>(`https://api.pexels.com/v1/curated?page=${page}&per_page=${show}`, {
        headers: {
            Authorization: `${import.meta.env.VITE_API_KEY}`
        }
    })
    return res.data;  
} 

async function searchPhotos(query: string, page: number, show: number) {
    const res = await axios.get<IResp>(`https://api.pexels.com/v1/search?query=${query}&page=${page}&per_page=${show}`, {
        headers: {
            Authorization: `${import.meta.env.VITE_API_KEY}`
        }
    })
    return res.data;  
}

export { getPhotos, searchPhotos };