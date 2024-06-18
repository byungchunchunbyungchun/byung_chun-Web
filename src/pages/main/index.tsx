import "./style.scss"
import Meal from "../../components/meal"
import Comment from "../../components/comment"
const Main = ()=>{
return(
    <main className="main">
        <div className="mainGroup">
            <Meal/>
            <Comment/>
        </div>
    </main>
)
}
export default Main