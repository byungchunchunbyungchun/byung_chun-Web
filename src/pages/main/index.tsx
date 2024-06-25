import "./style.scss"
import Meal from "../../components/meal"
import Comment from "../../components/comment"
import {  useMeal ,useSelectMealQuery} from "../../queries/meal/query";
const Main = ()=>{
    const { data } = useMeal();

return(
    <main className="main">
        <div className="mainGroup">
            <Meal />
            <Comment mealId={data?.[0].id}/>
        </div>
    </main>
)
}
export default Main