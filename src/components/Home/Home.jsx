import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";


const Home = () => {
    const location = useLocation();
    console.log(location)
    return (
        <div>
            <Header></Header>
            <h2>My MealBD website here</h2>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;