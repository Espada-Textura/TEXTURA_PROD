import './styles/Topbar.scss'
import Logo from "../logo/index.jsx";

export default function Topbar(){
    return (
        <header>
            <Logo/>
            <nav>
                <button className={"--tr-button-plain --tr-button-medium"}>
                    Something
                </button>
            </nav>
        </header>
    )

}