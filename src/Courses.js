import Course from "./Course";

function Courses({courses,deleteCourse}) {
    return (
        <div className="courses-div">
            <div>
                <h2>Kurslarim</h2>
            </div>
            <div className="cardDiv">
                {courses.map((item, index) => {
                    return <Course key={index} {...item} deleteCourse={deleteCourse}/>
                })
                }
            </div>
        </div>
    );
}

export default Courses;
