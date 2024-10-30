import { Link } from "react-router-dom";


const Meal = ({meal}) => {
    
    const {idCategory,strCategory,strCategoryDescription} = meal;
    
    return (
        <div style={{border:'2px solid goldenrod', borderRadius:'10px', padding:'10px', marginTop:'10px'}}>
            <h4>IdCategory: {idCategory}</h4>
            <h5>StrCategory: {strCategory}</h5>
            <p>Description: {strCategoryDescription}</p>
            <Link to={`/meals/${strCategory}`}>Category Details</Link>
        </div>
    );
};

export default Meal;