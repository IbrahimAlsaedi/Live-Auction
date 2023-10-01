import { BrowserRouter } from "react-router-dom";
import { ProductsList, Contact, Slider, Navbar,} from "./components";

const App = () => {

  
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar /> 
         <Slider />
        </div>
        <ProductsList />
        <div className='relative z-0'>
        <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;