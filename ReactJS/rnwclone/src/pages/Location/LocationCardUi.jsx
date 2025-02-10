const LocationCardUi = ({ icon, title ,para }) => {
    return (
      <>
        <div className="card shadow 
         mt-4  border-0 rounded  ">
          <div className="card-body text-center  ">

            <div className="rounded">
            <img src={icon} className="w-100 rounded"  alt="" />
            </div>

            <h5 style={{ height: "50px" }} className="mb-0 pt-2 px-5 head-small">{title} </h5>
            {/* <h6 style={{ height: "50px" }} >{title} </h6> */}
            <p class="mb-0 text-dark">{para}</p>
          </div>
        </div>
      </>
    );
  };
  
  export default LocationCardUi;