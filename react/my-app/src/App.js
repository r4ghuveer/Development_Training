
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar title="First Nav" aboutText="This is the first prop test"/> 
  
      <TextForm heading="Enter the text"/>
      {/* <About/> */}
  
    </>
  );
}

export default App;
