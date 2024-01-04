import { useNavigate } from 'react-router-dom';
const Menu = () => {
    let navigate = useNavigate();
    const speakPageName = (pageName) => {
        const message = new SpeechSynthesisUtterance(pageName);
        message.lang = "en-US"
        window.speechSynthesis.speak(message);
      };
    const Logout = () =>{
        localStorage.removeItem("email");
        localStorage.clear();
        speakPageName("Logged out to home page");
        navigate("/");
    }
    return (
        <div className="container-menu">
            <div className="menu-user">
                <p>İsim Soyisim</p>
                <p>example@hotmail.com</p>
            </div>

            <div className="menu-tabs">
                
                <div className="menu-tab"><img src="" /> <span>Security</span> </div>
                <div className="menu-tab"><img src=""/> <span>Settings</span> </div>
            </div>

            <input onClick={Logout} type="button" value="Log Out"/>
        </div>
        
    )

}

export default Menu