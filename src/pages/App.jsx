import { useState } from "react";
import Switch from "../components/switch/switch";
import Profile from "../components/profile/profile";
import Links from "../components/links/links";

import "./App.css";

import imgDarkMode from "../img/avatar.jpg"
import imgLightMode from "../img/avatar2.jpg"

const App = () => {

    const [isLightMode,setIsLightMode] = useState(true)
    const imgSrc = isLightMode ? imgLightMode : imgDarkMode
    const imgAlt = isLightMode ? "Imagem no Modo Claro" : "Imagem no Modo Escuro";

    return(
        <div id="container">
            <Profile imgSrc={imgSrc} imgAlt={imgAlt} >@aa_nardelli</Profile>
            <Switch></Switch>
            <div id="links">
                <ul>
                    <Links link={"https://github.com"}>GitHub</Links>
                    <Links link={"https://instagram.com/aa_nardelli?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D"}>Instagram</Links>
                    <Links link={"http://tiktok.com/@heynardelli"}>TikTok</Links>
                    <Links link={"#"}>Portifólio</Links>
                </ul>
            </div>
        </div>
    )
}

export default App