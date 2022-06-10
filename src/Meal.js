import React, { useState } from "react";
import Mealitem from "./Mealitem";

const Meal = () => {
    const[search,setSearch]=useState("");
    const[meal,setMeal]=useState();
    const searchMeal=(e)=>{
        if(e.key=="Enter")
        {
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`).then(res=>res.json())
            .then(data=> {setMeal(data.meals);setSearch("")})
        }
    }
    return (
        
            <div className="main">
                <div className="heading">
                    <h1>Recipe Finder</h1>
                    
                </div>
                <div className="searchBox">
                    <input type="search" className="search-bar" placeholder="Enter food name..."
                     onChange={(e)=>setSearch(e.target.value)} value={search} onKeyPress={searchMeal}/>
                </div>
                <div className="container">
                   {   
                  
                    (meal==null)? <p className="notFound">Only delicious recipes are available</p> : 
                         meal.map((res)=>{
                             return(
                            <Mealitem data={res}/>)} 
                     
                    ) 
                   
                   }
                </div>
            </div>
        
    )
}
export default Meal;