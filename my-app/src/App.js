import './App.css';
import Navbar from './components/Navbar';
import User from './components/User';
import Navbar2 from './components/Navbar2';
function App() {
  return (
    <div  className='container'>
      <Navbar title="User App 2"></Navbar>
      <User 
      name = "Battal Kaan"
      surName="Yapar"
      salary = "5000"
      department= "Bilişim"
      
      />
      <User 
      name = "Oğuzhan"
      surName="Bedir"
      salary = "9000"
      department= "Bilişim"
      
      />
      
    </div>
  );
}

export default App;

