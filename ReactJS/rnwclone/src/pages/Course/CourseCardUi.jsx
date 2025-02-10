const CourseCardUi = ({ icon, title, para }) => {
    return (
      <>
        <div className="card shadow   mt-4  border-0 "  >
          <div className="card-body text-center  ">

            <div className="card text-center py-4 course-img border-0 ">
            <img src={icon} height="190px" alt="" className="align-self-center rounded" />
            </div>

            <h4 style={{ height: "50px" }} className="mt-3">{title} </h4>
            <p class="px-2 fs-16 text-dark font-small " style={{height:"100px"}}>{para}</p>
            <button className="btn btn-primary btn-sm mt-4 mb-4">Know More</button>
          </div>
        </div>
      </>
    );
  };
  
  export default CourseCardUi;