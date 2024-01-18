import './App.css';
import lake from "./image/lake.JPG";
import GallaryFooter from './components/FooterSection/GallaryFooter.jsx';
import Header from "./components/HeaderSection/Header.jsx";
import Body from "./components/BodySection/body.jsx"
import ImageData from "./components/imageContainer/image.jsx"
function App() {
  return (
    <div>
     <Header/>

     <Body data={ImageData()}/>
     
      <GallaryFooter/> 
    </div>
  )
}

export default App;
