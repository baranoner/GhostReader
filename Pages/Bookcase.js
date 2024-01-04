
import Categories from "../Components/Categories"
import Books from "../Components/Books";
import "../Style/books.scss"
import BookPop from "../Components/BookPop"
import Audiobooks from "../Components/Audiobooks";

const Bookcase = () => {
  return (
    <div className='container-flex'>
      <div className='container-burak'>
        <Categories />
        <hr />
        <Books />
        
      </div>
    </div>
  );
}

export default Bookcase