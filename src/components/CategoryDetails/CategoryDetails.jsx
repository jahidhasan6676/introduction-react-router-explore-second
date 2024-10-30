import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const CategoryDetails = () => {
    const categoryDetails = useLoaderData();
    const {strCategory} = useParams();
    const navigate = useNavigate();
    const handleGoBack = () =>{
        navigate(-1);
    }
 console.log(strCategory)
  
    return (
        <div>
            <h2>IdMeal: {categoryDetails.meals[0].idMeal}</h2>
            <h4>StrMeal: {categoryDetails.meals[0].strMeal}</h4>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default CategoryDetails;