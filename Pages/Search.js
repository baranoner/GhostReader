import react ,{useState}from "react";
import Card from "../Components/Card";
import axios from "axios";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import '../Style/search.scss';

const Search=()=>{
    const [search,setSearch]=useState("");
    const [bookData,setData]=useState([]);
    const searchBook=(evt)=>{
        if(evt.key==="Enter")
        {
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyBz__SxeKaiPqKQyWl9qvXpMOzDwaZvdJk'+'&maxResults=40')
            .then(res=>setData(res.data.items))
            .catch(err=>console.log(err))
        }
    }
    return(
        <>
            <div className="search-flex">
                <div className="container-search">
                <div className="search-box">
                    <div className="box-name">Find Your Book</div>
                    <div className="search">
                        <input className="inputhold" placeholder="Enter Your Book Name"
                        value={search} onChange={e=>setSearch(e.target.value)}
                        onKeyPress={searchBook}/>
                        <button><i className="fas fa-search"></i></button>
                    </div>
                    
                </div>
                <div className="container">
              {
                    <Card book={bookData}/>
              }  
            </div>
                </div>
                
            </div>

            
        </>
    )
}
export default Search;