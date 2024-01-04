import '../Style/yardim.scss';
import Fqa from "../Components/Fqa";
import Contacts from "../Components/Contacts";

const Yardim = () => {
  return (
    <div className='yardim-container'>
      <div className="container-main">
        <Fqa />
        <Contacts />
      </div>
    </div>
  );
}

export default Yardim