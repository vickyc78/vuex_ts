import axios from "axios";

let dataUrl = "https://jsonplaceholder.typicode.com";

export default {
  apiCallWithDataGetMethode: async url => {
    return await axios
      .get(dataUrl + url)
      .then(res => {
        return res;
      })
      .catch(err => {
        return Object.assign({}, err.response);
      });
  }
};
