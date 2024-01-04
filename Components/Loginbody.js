import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from "./Button"
const Loginbody = () => {

let navigate = useNavigate();

const[user,setUser] = useState({email:'',password:''});



const handleChange=(e)=>{
    setUser({...user, [e.target.name]: e.target.value});
}


const submitForm=(e)=>{
    e.preventDefault();
    const sendData = {
      email:user.email,
      password:user.password
    }
    console.log(sendData);

    axios.post("http://localhost/login.php", sendData).then(
      (result)=>{
        if(result.data.Status === "200"){
            window.localStorage.setItem("email", result.data.email);
            speakPageName("home");
            navigate("/");
          
        }
        else{
            alert("Invalid User");
        }
      }
    )
  }



    const speakPageName = (pageName) => {
        const message = new SpeechSynthesisUtterance(pageName);
        message.lang = "en-US"
        window.speechSynthesis.speak(message);
      };
  return (
    <div className="middle-container-flex">
        <div className="middle-container">
        <form onSubmit={submitForm}>
            <div className="login-box"> 
                <div className="login-title"> Login </div>
                    <hr className="login-break" />

                        <div className="mail-image"> 
                            <img className="mail-icon" src={process.env.PUBLIC_URL+"maillogo.svg"} />
                            <input onChange={handleChange} value={user.email} type='text'  name='email'  placeholder="E-mail"/>
                        </div>
                        <div className="mail-image"> 
                            <img className="mail-icon" src={process.env.PUBLIC_URL+"maillogo.svg"} />
                            <input onChange={handleChange} value={user.password} type='text'  name='password' placeholder="PASSWORD"/>
                        </div>
                        
                        
                        
                            <div className="btns">
                            <input type="submit" name="login" value="login" className='login-btn'/>
                            
                            </div> 
                            <div className="btns">
                            <Link to='/register' onClick={() => speakPageName('register')}>
                            <input type="button" name="sign-up" value="sign-up" className="sign-up-btn"/>
                            </Link>
                                
                            </div>     
                            
            </div>
            </form>
           
        </div>



    </div>
  )
}

export default Loginbody