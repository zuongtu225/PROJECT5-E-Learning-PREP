import axios from "axios";

export const registerAPI = (user) => {
  return axios
    .post("http://localhost:9000/api/v1/register", user)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error("Error!!!!", error);
    });
};
