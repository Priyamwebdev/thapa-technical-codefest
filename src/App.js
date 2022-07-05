import './App.css';
import About from './componenets/About';
import Courses from './componenets/Courses';
import FAQ from './componenets/FAQ';
import Form from './componenets/Form';
import Navbar from './componenets/Navbar';
import Totalstudents from './componenets/Totalstudents';
import Feedback from './componenets/Feedback';
function App() {
  return (
   <div> 
       <Navbar/>
        <Form/><br/>
  <h1  className="text-4xl font-bold text-center mt-2">
    Our courses
       </h1>
       <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap -m-4">
  <Courses title={"course name"} category={"CATEGORY"} description={"     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, alias numquam. Magni, autem! Commodi neque architecto eum tenetur, aliquid fuga, nulla ut maxime blanditiis dolorem possimus libero nisi praesentium pariatur exercitationem sint expedita ipsum."}/>
  <Courses title={"course name"} category={"CATEGORY"} description={"     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, alias numquam. Magni, autem! Commodi neque architecto eum tenetur, aliquid fuga, nulla ut maxime blanditiis dolorem possimus libero nisi praesentium pariatur exercitationem sint expedita ipsum."}/>
  </div>
  </div>
  </section>
  <Totalstudents/>
  <About/>
  <FAQ/>
  <Feedback/>
  </div>
  );
}

export default App;
