import axios from 'axios'

export const newsResource = axios.create({baseURL:`${process.env.API.API}/news`})
export const homeResource = axios.create({baseURL:`${process.env.API.API}/home`})
