import axios from "axios";

export default {
  //Check If its a valid log in
  checkLogin: function(userLoginData) {
    return axios.post("/api/login", userLoginData);
  },
  logout: function(){
    return axios.get("/api/logout");
  },
  fileUpload: function(data) {
    return axios.post("/api/upload", data);
  },
  getWorkSpaceById(workSpaceId) {
    return axios.get(`/api/workspace/${workSpaceId}`);
  },
  getDistinctLocationsForOwner(ownerId) {
    return axios.get(`/api/owner/locations/${ownerId}`);
  },
  getFeatureList() {
    return axios.get("/api/features");
  },
  updateWorkSpaceObject(workSpaceDetailObject) {
    return axios.put(
      `/api/workspace/${workSpaceDetailObject.workSpaceId}`,
      workSpaceDetailObject
    );
  },
  createWorkSpaceObject(workSpaceDetailObject) {
    return axios.post("/api/workspace", workSpaceDetailObject);
  },
  getBookingByWorkspace(workSpaceId) {
    return axios.get(`/api/booking/workspace/${workSpaceId}`);
  },
  getWorkspaceByLocation(locationId) {
    return axios.get("/api/workspace/location/" + locationId);
  },
  getLocationByOwner(ownerId) {
    return axios.get("/api/location/owner/"+ ownerId);
  },
  getLocationById(locationId) {
    return axios.get("/api/location/" + locationId);
  },
  saveLocation: function(locationData) {
    return axios.post("/api/location/add", locationData);
  },
  getLocations: function() {
    return axios.get("/api/location");
  },
  getLocation: function(locationId) {
    return axios.get("/api/location/" + locationId);
  },
  updateLocation: function(locationId, locationData) {
    return axios.put(`/api/location/${locationId}`, locationData);
  },
  makePayment: function(token) {
    return axios.post("/api/stripepayment", token);
  },
  createUser: function(user) {
    return axios.post("/api/user", user);
  }
};
