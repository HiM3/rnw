import career from "./Career";
import CareerCardUi from "./CareerCardUi";

const CareerPage = () => {
  return (
    <>
      <div className="container py-5  ">
        <h1 className="text-dark  mb-4 text-center">
          Pick The Right Course To Build Your Career
        </h1>
        <div className="row">
          {career.map((ele) => {
            return (
              <>
                <div className="col-lg-2 ">
                  <CareerCardUi icon={ele.icon} title={ele.title} />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CareerPage;
