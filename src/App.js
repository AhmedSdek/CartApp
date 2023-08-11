import { Route, Routes } from 'react-router-dom';
import Footer from './component/Utility/Footer';
import NavBarLogin from './component/Utility/NavBarLogin';
import HomePage from './page/home/Homepage'
import LoginPage from './page/Auth/LoginPage';
import RegisterPage from './page/Auth/RegisterPage';
import AllCategory from './page/Category/AllCategory';
import AllBrand from './page/Brand/AllBrand';

function App() {
  return (
    <div>
      <NavBarLogin />
      <Routes>
        <Route index element= {<HomePage />}/>
        <Route path='/login' element= {<LoginPage />}/>
        <Route path='/register' element= {<RegisterPage />}/>
        <Route path='/allcategory' element= {<AllCategory />}/>
        <Route path='/allbrand' element= {<AllBrand />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
