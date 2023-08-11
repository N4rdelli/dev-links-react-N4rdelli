import "./App.css";

import Profile from "../components/profile/profile";

import imgDarkMode from "../img/avatar.jpg"
import imgLightMode from "../img/avatar2.jpg"
import { useState } from "react";

const App = () => {
    
    const [isLightMode,setIsLightMode] = useState(true)
    const imgSrc = isLightMode ? imgLightMode : imgDarkMode
    const imgAlt = isLightMode ? "Imagem no Modo Claro" : "Imagem no Modo Escuro";

    return(
        <div>
            <Profile imgSrc={imgSrc} imgAlt={imgAlt} >@aa_nardelli</Profile>
        </div>
    )
}

export default App