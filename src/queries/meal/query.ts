import axios from "axios";
import { useQuery } from "react-query";
import { queryKey } from "../queryKey";
import config from "../../config/config.json";
import { MealResponse, MealResponse2 } from "./type";

interface getParms {
  year: number;
  month: number;
  day: string;
}

export const useMeal = () => {
  const useGetMeal = useQuery([queryKey.meal.getMeal], async () => {
    const { data } = await axios.get<MealResponse>(
      `${config.server}/meal/today`
    );
    return data.data;
  });
  return useGetMeal;
};
export const useSelectMealQuery = () => {
  const useSelectMeal = useQuery([queryKey.meal.getSelectMeal], async () => {
    const { data } = await axios.get<MealResponse2>(
      `${config.server}/meal/get`,
      { params: { year: 2024, month: 6, day: 25 } }
    );
    return data.dataa;
  });
  return useSelectMeal;
};
