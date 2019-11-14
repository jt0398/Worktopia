import axios from "axios";

export default {
  // Gets all workspaces
  getWorkspaces: function() {
    return axios.get("/api/workspace");
  },
  // Gets the Workspace with the given id
  getWorkspace: function(id) {
    return axios.get("/api/workspace/" + id);
  },
  searchWorkspace: function(searchParams) {
    let params = JSON.stringify(searchParams);
    return axios.post("/api/workspace/search/results/", params, {
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
  // Deletes the Workspace with the given id
  /* deleteWorkspace: function(id) {
    return axios.delete("/api/Workspaces/" + id);
  }, */
  // Saves a Workspace to the database
  /* saveWorkspace: function(WorkspaceData) {
    return axios.post("/api/Workspaces", WorkspaceData);
  } */
};
