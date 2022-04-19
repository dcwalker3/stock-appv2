import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";


// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "../NavBar/Navbar";
import Portfolio from "../Portfolio/Portfolio";
import Login from "../Signup Forms/Login";
import SignUp from "../Signup Forms/Signup";
import { AuthProvider } from "../../firebase/AuthContext";

function App() {
  return (
    <AuthProvider>
      <div className="App">
          <NavBar/>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Portfolio/>} />
                  <Route path="/about" element={<h1>About</h1>} />
                  <Route path="/contact" element={<h1>Contact</h1>} />

                  <Route path="/login" element={<Login/>}/>
                  <Route path="/signup" element={<SignUp/>}/>
              </Routes>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
