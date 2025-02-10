const CareerCardUi = ({ icon, title }) => {
  return (
    <>
      <div className="card shadow   mt-4  border-0 rounded  ">
        <div className="card-body text-center  ">
          <img src={icon} width="50px" alt="" />
          <h5 style={{ height: "50px" }} className="mt-3">{title} </h5>
        </div>
      </div>
    </>
  );
};

export default CareerCardUi;
