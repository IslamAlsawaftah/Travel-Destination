import Header from "../header/Header";
import Tours from "../tours/Tours";
import data from "../../data/data.json"
import Footer from "../footer/Footer";

function home() {
    return (
        <>
            <Header />
            <Tours datas={data} />
            <Footer />
        </>
    )
}
export default home;