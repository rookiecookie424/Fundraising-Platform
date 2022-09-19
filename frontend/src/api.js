const api = {
  hostname: 'localhost:8000',
  getProjectList (page) {
    return fetch(`http://${this.hostname}/api/v1/projectlist?paging=${page}`, {
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    });
  },
  getProjectDetail () {
    return fetch(`http://${this.hostname}/api/v1/projectdetail`, {
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    });
  }
};

export default api;
