import { useState } from "react";
import Switch from "../components/switch/switch";
import Profile from "../components/profile/profile";
import Links from "../components/links/links";
import SocialLinks from "../components/socialLinks/socialLinks";
import Footer from "../components/footer/footer";

import "./App.css";

import imgDarkMode from "../img/avatar.jpg"
import imgLightMode from "../img/avatar2.jpg"

const App = () => {
    const [isLightMode,setIsLightMode] = useState(false)

    //Troca o tema a partir do Switch
    const toggleMode = () => {
        setIsLightMode((prevMode) => !prevMode)  //Se começou com true passa a ser false, e vice-versa
    }

    //Configura a imagem de acordo com os temas claro e escuro, respectivamente.
    const imgSrc = isLightMode ? imgLightMode : imgDarkMode
    const imgAlt = isLightMode ? "Imagem no Modo Claro" : "Imagem no Modo Escuro";

    //Construção do site
    return(
        <div id="App" className={isLightMode ? "light" : ""}>
            <div id="container">
                <Profile imgSrc={imgSrc} imgAlt={imgAlt} >@aa_nardelli</Profile>
                <Switch mode={toggleMode} infoButton={isLightMode} />
                <div id="links">
                    <ul>
                        <Links link={"https://github.com"}>GitHub</Links>
                        <Links link={"https://instagram.com/aa_nardelli?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D"}>Instagram</Links>
                        <Links link={"http://tiktok.com/@heynardelli"}>TikTok</Links>
                        <Links link={"#"}>Portifólio</Links>
                    </ul>
                </div>
                <div id="socialLinks">
                    <SocialLinks href={"#"} icon={"logo-github"}></SocialLinks>
                    <SocialLinks href={"#"} icon={"logo-instagram"}></SocialLinks>
                    <SocialLinks href={"#"} icon={"logo-tiktok"}></SocialLinks>
                    <SocialLinks href={"#"} icon={"logo-linkedin"}></SocialLinks>
                </div>
                <Footer link={"#"}>@Nardelli</Footer>
            </div>
        </div>
        )
    }
    

export default App