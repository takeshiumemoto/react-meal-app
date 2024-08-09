import {useState} from "react";

const Form =()=>{
    const [mealName, setMealName] = useState("japanese")
    console.log(mealName)
    const getMealData = async()=>{
        const response= await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=sushi")
        const jsonData = await response.json()
        
    }
    return(
        <form>
            <input onChange={()=>setMealName("America")}
                    type="text"
                    name="mealName"
                    placeholder="料理名を英語で入力"/>
            <button>検索</button>        
        </form>
    )
}

export default Form;