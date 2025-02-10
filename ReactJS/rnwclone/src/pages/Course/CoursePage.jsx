import Course from "./Course"
import CourseCardUi from "./CourseCardUi";

const CoursePage = () => {
    return (
      <>
        <div className="container py-5  ">
          <h1 className="text-dark  mb-4 text-center">
          Career Courses
          </h1>
          <div className="row d-flex justify-content-center" >
            {Course.map((ele) => {
              return (
                <>
                  <div className="col-lg-4 ">
                    <CourseCardUi icon={ele.icon} title={ele.title} para={ele.para} />
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </>
    );
  };

  export default CoursePage;