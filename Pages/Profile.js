import Menu from '../Components/Menu';
import ProfileTab from '../Components/ProfileTab'
import SecurityTab from '../Components/SecurityTab'
import SettingsTab from '../Components/SettingsTab'
import '../Style/profile.scss';


const Profile = () => {
  return (
    <div className="App">
      <div className="bar" />
      <div className="section">
        <Menu />
        <SettingsTab />
      </div>

    </div>
  );
}

export default Profile