import './App.css';
import Profile from "./profile/Profile"
import photo from "./profile/image/photo.png"

function App() {
  const handleName = (fullName) => alert(fullName);
  return (
    <div className="App">
      <Profile fullName="BAHRI Zouhour" formation= "full stack JS" profession="Web developer" handleName={handleName}>
      <img className="photo" src={photo} alt="" />
      </Profile>
    </div>
  );
}

export default App;
