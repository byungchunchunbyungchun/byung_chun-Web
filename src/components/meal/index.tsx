import { useMeal, useSelectMealQuery } from "../../queries/meal/query";
import "./style.scss";
import { MealResponse, mealOne } from "../../queries/meal/type";
import axios from "axios";
import config from "../../config/config.json";
import React, { useState } from "react";
import leftLine from "../../assets/expand_left_line.png";
import rightLine from "../../assets/expand_right_line.png";

interface Props {
  data?: MealResponse["data"];
}

const Meal = () => {
  const { data } = useMeal();
  const [mealData, setmealData] = useState<MealResponse[]>([]);
  const [MealData, setMealData] = useState<mealOne["data"] | undefined>(
    undefined
  );
  const [View, setView] = useState(false);
  const [datads, setsdada] = useState<MealResponse>();
  const cilckOut = () => {
    setView(false);
  };

  const clickMealOne = async (id: number) => {
    setView(false);
    try {
      const res = await axios.get<mealOne>(`${config.server}/meal/one`, {
        params: { mealId: id },
      });
      setMealData(res.data.data);
      setView(true);
    } catch (error) {
      console.log(error);
    }
  };

  const [sld, setsds] = useState(false);
  const NextDay = async () => {
    await axios
      .get<MealResponse>(`${config.server}/meal/get`, {
        params: { year: 2024, month: 6, day: 25 },
      })
      .then((res) => {
        setsds(true);
        setsdada(res.data);
      });
  };

  return (
    <>
      {View ? null : sld ? (
          <div className="meal">
            <div className="MealMeun">
              <img src={leftLine} alt="" />
              <h1>{datads?.data?.[0].date}</h1>
              <img src={rightLine} alt="" onClick={ NextDay} />
            </div>
            {datads?.data?.slice(0, 3).map((item, idx) => (
              <div
                key={item.id}
                className="mealValue"
                onClick={() => clickMealOne(item.id)}
              >
                <h2>
                  {item.time === "breakfast"
                    ? "아침 "
                    : item.time === "lunch"
                    ? "점심"
                    : "저녁"}
                </h2>
                <div>{item.meal}</div>
                <div>칼로리: {item.calorie}</div>
              </div>
            ))}
          </div>
        )
        : (
        <div className="meal">
          <div className="MealMeun">
            <img src={leftLine} alt="" />
            <h1>{data?.[0].date}</h1>
            <img src={rightLine} alt="" onClick={ NextDay} />
          </div>
          {data?.slice(0, 3).map((item, idx) => (
            <div
              key={item.id}
              className="mealValue"
              onClick={() => clickMealOne(item.id)}
            >
              <h2>
                {item.time === "breakfast"
                  ? "아침 "
                  : item.time === "lunch"
                  ? "점심"
                  : "저녁"}
              </h2>
              <div>{item.meal}</div>
              <div>칼로리: {item.calorie}</div>
            </div>
          ))}
        </div>
      )}

      {View ? (
        <div className="mealMain">
          <h2 onClick={() => cilckOut()}>돌아가기</h2>
          <div className="mealValueModel">
            <h3>
              {MealData?.time === "breakfast"
                ? "아침"
                : MealData?.time === "lunch"
                ? "점심"
                : "저녁"}
            </h3>
            <div>{MealData?.meal}</div>
            <div>칼로리: {MealData?.calorie}</div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Meal;
