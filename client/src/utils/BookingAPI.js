import axios from "axios";

export default {
  // getAllData: function() {
  //   return axios.get("/api/booking");
  // },

  getUserData: function(userId) {
    return axios.get(`/api/booking/user/${userId}`);
  },

  getUserDetails: function(userId) {
    return axios.get(`/api/booking/owner/${userId}`);
  },

  bookWorkspace: function(booking) {
    return axios.post(`/api/booking/workspace`);
  }
};
