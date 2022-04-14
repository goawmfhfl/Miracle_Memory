export const getPosition = () => {
  const successCallBack = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
      latitude,
      longitude,
    };

    localStorage.setItem("location", JSON.stringify(coordsObj));
  };

  const errorCallBack = () => {
    console.log("Location is not correct");
  };
  const getCoords = () => {
    navigator.geolocation.getCurrentPosition(successCallBack, errorCallBack);
  };
  getCoords();
};
