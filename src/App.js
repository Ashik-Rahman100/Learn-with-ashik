import './App.css';
// Put any other imports below so that CSS from your
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Home from './components/Home/Home';
import Navber from './components/Navber/Navber';
import About from './components/About/About';
import Services from './components/Services/Services';
import ServicesDetails from './components/ServicesDetails/ServicesDetails';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navber></Navber>
         <Switch>
           <Route path='/'>
               <Home></Home>
            <Route>
            <Route exact path = '/home'>
                <Home></Home>
            </Route>
            <Route exact path='/about'>
              <About></About>
            </Route>
            <Route exact  path= '/services'>
              <Services></Services>
            </Route>
            <Route exact path = '/overview'>
              <ServicesDetails></ServicesDetails>
            </Route>
            <Route path = '*'>
               <NotFound></NotFound>
            </Route>
         </Switch>
         <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
