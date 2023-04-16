import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";
import Courses from "./Courses";
import Loading from "./Loading";

function App() {
  const [isloading,setIsloading] = useState(true);
  const [courses,setCourses]=useState([]);
  const fetchData=async ()=>{
    try{
      const data=await axios.get("http://localhost:3004/courses");
      setCourses(data.data);
    }catch (error){
    }

    setIsloading(false);
  }
  useEffect(() => {
    const data=fetchData();

  }, []);

  const deleteCourse=(id)=>{
    const deleted=courses.filter((item)=>{
      return item.id!==id;
    })
    setCourses(deleted);
  }

  return (
  <div className="App">{
    isloading?( <Loading/>):(
        courses.length===0?(
            <div>
              <button className="course-delete" onClick={()=>fetchData()}>Yukle</button>
            </div>
        ):(
        <Courses courses={courses} deleteCourse={deleteCourse}/>)
    )
  }

  </div>);
}

export default App;
