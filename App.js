
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import { Shop } from './Pages/Shop';
import { ShoCategory } from './Pages/ShoCategory';
import { Cart } from './Pages/Cart';
import { Product } from './Pages/Product';
import { LoginSignup } from './Pages/LoginSignup';
import { Footer } from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import  women_banner  from './Components/Assets/banner_women.png'
import  kid_banner  from './Components/Assets/banner_kids.png'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/'element={<Shop/>}/>
        <Route path='/mens'element={<ShoCategory banner={men_banner} category="men"/>}/>
        <Route path='/womens'element={<ShoCategory banner={women_banner} category="women"/>}/>
        <Route path='/kids'element={<ShoCategory  banner= {kid_banner} category="kid"/>}/>
        <Route path="/product"element={<Product/>}>
        <Route path=':productId' element={<Product/>}/>
       </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
        
      
      </Routes>
      <Footer/>
    
      </BrowserRouter>
    </div>
  );
}

export default App;
