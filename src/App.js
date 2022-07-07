import './App.css';
import About from './componenets/About';
import Courses from './componenets/Courses';
import FAQ from './componenets/FAQ';
import Form from './componenets/Form';
import Navbar from './componenets/Navbar';
import Totalstudents from './componenets/Totalstudents';
import Feedback from './componenets/Feedback';
import { useState } from 'react';
import Footer from './componenets/Footer';
import Quetes from './componenets/Quetes';
function App() {
  const [showmore, setshowmore] = useState(false)
  const [more, setmore] = useState("more")
  const handleshowmore = () =>{
     if(showmore===false){
        setshowmore(true)
        setmore('less')
      }
      else if(showmore===true){
        setshowmore(false)
        setmore('more')
    }
}
    
  return (
   <div> 
       <Navbar/>
        <Form/><br/>
  <h1  className="text-4xl font-bold text-center mt-14 sm:mt-24 md:mt-36">
    Our courses
       </h1>
       <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap -m-4">
  <Courses/>
{showmore===true  &&<Courses/>}
  <i className='mx-auto text-xl text-blue-400 cursor-pointer' onClick={handleshowmore}>Show {more}</i>
  </div>
  </div>
  </section>
  <Totalstudents/>
  <About/>
  <FAQ/>
  <Quetes/>
  <Feedback/>
  <Footer/>
  </div>
  );
}

export default App;
