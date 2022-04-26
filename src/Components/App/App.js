import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";


// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from "../NavBar/Navbar";
import Portfolio from "../Portfolio/Portfolio";
import PrivateRoute from "../PrivateRoute";

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
                  <Route exact path="/" element={<PrivateRoute />}>
                    <Route exact path="/" element={<Portfolio />} />
                  </Route>
                  <Route exact path="/about" component={<PrivateRoute/>}>
                    <Route exact path="/about" component={<h1>About</h1>} />
                  </Route>
                  <Route exact path="/contact" component={<PrivateRoute/>}>
                    <Route exact path="/contact" component={<h1>Contact</h1>} />
                  </Route>

                  <Route path="/login" element={<Login/>}/>
                  <Route path="/signup" element={<SignUp/>}/>
              </Routes>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
