import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Teacher from "./Pages/Teacher/Teacher";
import Management from "./Pages/Management/Management";
import Facilities from "./Pages/Facilities/Facilities";
import Best from "./Pages/Best/Best";

function App() {
  return(
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Teachers" element={<Teacher/>}/>
      <Route path="Management" element={<Management />}/>
      <Route path="/Facilities" element={<Facilities />}/>
      <Route path="/Best" element={<Best />}/>
    </Routes>
  )
}
export default App;