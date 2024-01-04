
import { useState } from 'react';
import '../Style/login.scss';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

const Register = () => {
  let navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: ""
  })

  const speakPageName = (pageName) => {
    const message = new SpeechSynthesisUtterance(pageName);
    message.lang = "en-US"
    window.speechSynthesis.speak(message);
  };
  const handleChange = (e) =>{
    
    setData({ ...data, [e.target.name]: e.target.value});
    console.log(data)
  }
  
  const submitForm=(e)=>{
    e.preventDefault();
    const sendData = {
      email:data.email,
      password:data.password
    }
    console.log(sendData);

    axios.post("http://localhost/insert.php", sendData).then(
      (result)=>{
        if(result.data.Status == "Invalid"){
          alert("Invalid User");
        }
        else{
          speakPageName("login");
          navigate("/login");
        }
      }
    )
  }
  return (
    <div className='body' >
      <div className='login-container'>
        <form onSubmit={submitForm}>
      <div className="middle-container-flex">
        <div className="middle-container">
            <div className="login-box"> 
                <div className="login-title"> Register </div>
                    <hr className="login-break" />

                        <div className="mail-image"> 
                            <img className="mail-icon" src={process.env.PUBLIC_URL+"maillogo.svg"} />
                             <input type='text' onChange={handleChange} name='email' value={data.email} placeholder="E-mail"/>
                        </div>
                        <div className="mail-image"> 
                            <img className="mail-icon" src={process.env.PUBLIC_URL+"maillogo.svg"} />
                             <input type='text' onChange={handleChange} name='password' value={data.password} placeholder="PASSWORD"/>
                        </div>
                        
                        
                        
                        
                            
                            <div className="btns">
                              <input type="submit" name="sign-up" value="Sign in" className='sign-up-btn'/>
                                
                            </div>     
                            
            </div>
           
        </div>



    </div>
    </form>
      </div>
      
    </div>
  );
}

export default Register