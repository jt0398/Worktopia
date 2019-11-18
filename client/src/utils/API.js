import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
  //Check If its a valid log in
  checkLogin: function(userLoginData) {
    return axios.post("/api/login", userLoginData);
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
  saveLocation: function(locationData) {
    return axios.post("/api/location/add", locationData);
  },
  getLocations: function() {
    return axios.get("/api/location");
  },
  getLocation: function(locationId) {
    return axios.get("/api/location/" + locationId);
  }
};
