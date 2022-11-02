import './styles/App.scss'
import {Route, Routes} from "react-router-dom";
import HomePage from "../home_page/index.jsx";

function App() {

    return (
        <main>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
            </Routes>
        </main>

    )
}

export default App
