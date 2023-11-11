import axios from "axios";

export const getDataByCity = async (city) => {
    
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=6bc236fa8bd5e7e03f83fd8cea3eac74&cnt=7`
  );
  if (response) {
    return response.data;
  }
};

export const getMyLocation = async (location) => {
  return location.getCurrentPosition(async (position) => {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${position.coords.latitude}&lon=${position.coords.longitude}`
    );
    const data = await response.json();
    console.log(data, "api");
    return data;
  });
};
