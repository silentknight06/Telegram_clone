
import './App.css';
import Header from './Header';
import { useSelector } from 'react-redux';
import Sidebar from './Sidebar';
import Contact from './Contact';

function App() {
       const flgitem=useSelector((store)=>store.hamburger.flg);
  return (
    <div > 
    <Header />  
    <div className='flex'> 
    {
       flgitem && <Sidebar />
    }
    <Contact />
    </div>  
    </div>
  );
}

export default App;
