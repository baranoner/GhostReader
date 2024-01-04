import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [voiceRecognitionActive, setVoiceRecognitionActive] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [auth, setAuth] = useState("");

  

  useEffect(() => {
    var auth = localStorage.getItem("email");
    setAuth(auth);
  },
  [])

  const Logout = () =>{
    localStorage.removeItem("email");
    localStorage.clear();
    const message = new SpeechSynthesisUtterance("logged out to home page");
    message.lang = "en-US"
    window.speechSynthesis.speak(message);
    navigate("/");
}
  useEffect(() => {
    let recognition;

    const enableVoiceRecognition = () => {
      recognition = new window.webkitSpeechRecognition();
      recognition.continuous = true;
      recognition.onresult = (event) => {
        
        const last = event.results.length - 1;
        const command = event.results[last][0].transcript.trim().toLowerCase();
        
        // Perform voice commands
        if (command === 'library') {
          navigateAndSpeak('/books', 'Library');
        } else if (command === 'search') {
          navigateAndSpeak('/search', 'Search');
        } else if (command === 'help') {
          navigateAndSpeak('/yardim', 'Help');
        } else if (command === 'about') {
          navigateAndSpeak('/about', 'About');
        } else if (command === 'login') {
          navigateAndSpeak('/login', 'Login');
        } else if (command === 'home') {
          navigateAndSpeak('/', 'home');
        }
          else if (command === "logout") {
            Logout();
          }
      };

      recognition.start();
    };

    const disableVoiceRecognition = () => {
      if (recognition) {
        recognition.stop();
      }
    };

    const navigateAndSpeak = (path, pageName) => {
      navigate(path);
      speakPageName(pageName);
    };



    if (voiceRecognitionActive) {
      enableVoiceRecognition();
    } else {
      disableVoiceRecognition();
    }

    return () => {
      disableVoiceRecognition();
    };
  }, [voiceRecognitionActive, navigate]);

  const handleVoiceRecognitionToggle = () => {
    setVoiceRecognitionActive((prevState) => !prevState);
  };

  const handleLinkClick = (event) => {
    if (voiceRecognitionActive) {
      event.preventDefault();
    }
  };

  const speakPageName = (pageName) => {
    const message = new SpeechSynthesisUtterance(pageName);
    message.lang = "en-US"
    window.speechSynthesis.speak(message);
  };

  let notlogged = <div className='header'>
  <div className='logo-Name'>
    <img className='icon' src={process.env.PUBLIC_URL + 'logo.svg'} alt='Logo' />
    
    <div className='header-Title'>GHOST READER</div>
  </div>
  <div className='menu-Name'>
   
    
    <Link to='/yardim' onClick={() => speakPageName('Help')}>
      Help
    </Link>
    <Link to='/about' onClick={() => speakPageName('About')}>
      About
    </Link>
    <Link to='/login' onClick={() => speakPageName('Login')}>
      Login
    </Link>
    
    <button onClick={handleVoiceRecognitionToggle}>
      {voiceRecognitionActive ? 'Disable Voice Recognition' : 'Enable Voice Recognition'}
    </button>
  </div>
</div>;

let logged = <div className='header'>
<div className='logo-Name'>
  <img className='icon' src={process.env.PUBLIC_URL + 'logo.svg'} alt='Logo' />
  
  <div className='header-Title'>GHOST READER</div>
</div>
<div className='menu-Name'>
  <Link to='/books' onClick={() => speakPageName('Library')}>
    Library
  </Link>
  <Link to='/search' onClick={() => speakPageName('Search')}>
    Search
  </Link>
  <Link to='/yardim' onClick={() => speakPageName('Help')}>
    Help
  </Link>
  <Link to='/about' onClick={() => speakPageName('About')}>
    About
  </Link>
  
  <Link to='/profil' onClick={() => speakPageName('Profil')}>
    Profile
  </Link>
  <button onClick={handleVoiceRecognitionToggle}>
    {voiceRecognitionActive ? 'Disable Voice Recognition' : 'Enable Voice Recognition'}
  </button>
</div>
</div>;

if(localStorage.getItem("email")== null){
  return notlogged;
}
else{
  return logged;
}
 
};

export default Header; 