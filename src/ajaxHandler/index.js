import axios from "axios";
let ajax = {
  get: function(url) {
    return axios
      .get(url)
      .then(response => {
        return response;
      })
      .catch(error => {
        return error;
      });
  },
  post: function(url, params) {
    return axios
      .post(url, params)
      .then(response => {
        return response;
      })
      .catch(error => {
        return error;
      });
  },
  delete: function(url, params) {
    return axios
      .delete(url, params)
      .then(response => {
        return response;
      })
      .catch(error => {
        return error;
      });
  },
  put: function(url, params) {
    return axios
      .put(url, params)
      .then(response => {
        return response;
      })
      .catch(error => {
        return error;
      });
  }
};
export default ajax;
