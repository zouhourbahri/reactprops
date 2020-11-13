import './App.css';
import Profile from "./profile/Profile"
import photo from "./profile/image/photo.png"

const props = {
  fullName: "Bahri Zouhour",
  formation: "Fullstack js",
  profession: "Web developer",
}

function App() {
  const handleName = (fullName) => alert(fullName);
  return (
    <div className="App">
      <Profile user={props} handleName={handleName}>
      <img className="photo" src={photo} alt="" />
      </Profile>
    </div>
  );
}

export default App;
