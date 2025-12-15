import { Outlet } from "react-router-dom";
import Footer from "../Component/Footer/Footer";

const Mainlayout = () => {
    return(
        <main>
            <Outlet />
            <Footer/>
</main>
    )
}
export default Mainlayout