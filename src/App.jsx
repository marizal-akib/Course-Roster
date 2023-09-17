
import { useState } from 'react'
import './App.css'
import Cart from './Components/Cart/Cart'
import Courses from './Components/Courses/Courses'
import Header from './Components/Header/Header'

function App() {
  const [addedCourses, setAddedCourses] = useState([]);

  const handleSelectToCart = (course) =>{
    const isSelected = addedCourses.find(item => item.id === course.id);
    if (isSelected){
      return alert("Course Already Selected")
    } else{
      
      const newAddedCourses =[...addedCourses, course];
      setAddedCourses(newAddedCourses);
    }
  
  }

  return (
    <>
     
      <Header></Header>
      <div className='lg:flex md:flex max-w-7xl mx-auto'>

      <Courses handleSelectToCart={handleSelectToCart}></Courses>
      <Cart addedCourses={addedCourses}></Cart>

      </div>
      
    </>
  )
}

export default App
