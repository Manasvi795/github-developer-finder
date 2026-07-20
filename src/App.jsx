
import SearchBar from "./components/SearchBar";
import { Routes,Route } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import Favorites from "./pages/Favorites";

function App() {

  return (
    <Routes>
      <Route path="/" element={<SearchBar/>}/>
      <Route path="/users/:username" element={<ProfilePage/>}/>
      <Route path="/favorites" element={<Favorites/>}/>
    </Routes>
  );
}

export default App;
