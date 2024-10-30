import { useLoaderData } from "react-router-dom";
import Meal from "../meal/Meal";


const Meals = () => {
    const meals = useLoaderData();
    
   
   
    return (
        <div>
            <h2>Meals DB: {meals.categories.length}</h2>
            
            <div>
               {
                meals.categories.map((meal,index) => <Meal key={index} meal={meal}></Meal>)
               }
            </div>
           
        </div>
    );
};

export default Meals;