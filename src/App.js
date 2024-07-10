import './App.css';
import { About, Home, Menu } from "./components";

const App = () => {
  return (
    <div className='min-h-screen'>
      <div className='hero min-h-screen w-full bg-cover bg-no-repeat flex items-center py-20 px-44'>
        <Home/>
        <Menu/>
      </div>
      <div>
        <About/>
      </div>
    </div>
  );
}

export default App;
