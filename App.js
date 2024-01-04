import Home from "./Pages/Home";
import About from "./Pages/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Yardim from "./Pages/Yardim"
import Profile from "./Pages/Profile";
import Header from "./Components/Header";
import Bookcase from "./Pages/Bookcase";
import Login from "./Pages/Login";
import Search from "./Pages/Search";
import { useSpeechRecognition } from 'react-speech-recognition';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Register from "./Pages/Register";

function VoiceControl() {
  const { transcript, resetTranscript, interimTranscript } = useSpeechRecognition();
  const navigate = useNavigate();

  const Logout = () =>{
    localStorage.removeItem("email");
    localStorage.clear();
    const message = new SpeechSynthesisUtterance("logged out to home page");
    message.lang = "en-US"
    window.speechSynthesis.speak(message);
    navigate("/");
}

  useEffect(() => {
    const recognitionSupported = window.hasOwnProperty('SpeechRecognition') || window.hasOwnProperty('webkitSpeechRecognition');
    
    if (recognitionSupported) {
      const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
      recognition.continuous = true;
      
      recognition.onresult = (event) => {
        const finalTranscript = event.results[event.results.length - 1][0].transcript;
        
        if (finalTranscript === 'home') {
          const message = new SpeechSynthesisUtterance("home");
    message.lang = "en-US"
    window.speechSynthesis.speak(message);
          navigate('/');
          
        } else if (finalTranscript === 'about') {
          const message = new SpeechSynthesisUtterance("about");
    message.lang = "en-US"
    window.speechSynthesis.speak(message);
          navigate('/about');
          
        } else if (finalTranscript === 'help') {
          const message = new SpeechSynthesisUtterance("help");
    message.lang = "en-US"
    window.speechSynthesis.speak(message);
          navigate('/yardim');
          
        } else if (finalTranscript === 'profile') {
          const message = new SpeechSynthesisUtterance("profile");
    message.lang = "en-US"
    window.speechSynthesis.speak(message);
          navigate('/profil');
          
        } else if (finalTranscript === 'library') {
          const message = new SpeechSynthesisUtterance("library");
    message.lang = "en-US"
    window.speechSynthesis.speak(message);
          navigate('/books');
          
        } else if (finalTranscript === 'login') {
          const message = new SpeechSynthesisUtterance("login");
    message.lang = "en-US"
    window.speechSynthesis.speak(message);
          navigate('/login');
          
        } else if (finalTranscript === 'search') {
          const message = new SpeechSynthesisUtterance("search");
    message.lang = "en-US"
    window.speechSynthesis.speak(message);
          navigate('/search');
          
        }
        else if(finalTranscript === "logout"){
          Logout();
        }
        resetTranscript();
      };

      recognition.start();

      return () => {
        recognition.stop();
      };
    }
  }, [navigate, resetTranscript]);

  return null;
}

function App() {
  return (
    <Router>
      <VoiceControl />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/yardim" element={<Yardim />} />
        <Route path="/profil" element={<Profile />} />
        <Route path="/books" element={<Bookcase />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<Search />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
