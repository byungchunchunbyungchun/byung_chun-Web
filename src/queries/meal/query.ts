import axios from "axios"
import { useQuery } from "react-query"
import {queryKey} from "../queryKey"
import config from "../../config/config.json"

export const useMeal =()=>{
    const useGetMeal = useQuery([queryKey.meal.getMeal],async()=>{
        const {data} = await axios.get(`${config.server}/meal`,)
        return data.data
    })
    return useGetMeal
}