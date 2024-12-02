import style from './css/ShopPage.module.css'
import NavBar from "../publicpage/NavBar";


export default function ShopPage() {
    const shopPageSections = [
        { id: "home-section", name: "Lorem ipsum" },
        { id: "1-section", name: "Lorem ipsum" },
        { id: "2-section", name: "Lorem ipsum" },
    ];

    return (
        <div>
            <NavBar title="About Page" sections={shopPageSections} ></NavBar>

        </div>
    )
}