import LocationCardUi from "./LocationCardUi";
import Location from "./Location";

const LocationPage = () => {
    return (
      <>
        <div className="container py-5  ">
          <h1 className="text-dark  mb-4 text-center">
          We are in
          </h1>
          <div className="row d-flex justify-content-center">
            {Location.map((ele) => {
              return (
                <>
                  <div className="col-lg-3 ">
                    <LocationCardUi icon={ele.icon} title={ele.title} para={ele.para} />
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </>
    );
  };

  export default LocationPage;