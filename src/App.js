import React, { Component } from "react";
import "./App.css";
import GroupSelector from "./components/group_selector";

class App extends Component {
  state = {
    groups: [],
    exam_name: [],
    render_names: false
  };

  componentDidMount = async () => {
    let url = "http://localhost:8000/get_groups";
    let res = await this.fetch_url(url, "POST", null);
    console.log(res);
    this.setState({ groups: res });
  };

  fetch_url = async (url, req_method, body_text) => {
    // test_data = { group: body_text };
    const req_options = {
      method: req_method,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: JSON.stringify({ groups: body_text })
    };
    let res = await fetch(url, req_options)
      .then(function(response) {
        return response.json();
      })
      .then(function(posts) {
        return posts;
      })
      .catch(function(err) {
        console.log(err);
      });
    return res;
  };

  handleGroups = async id => {
    console.log("Button: ", id);
    let url = "http://localhost:8000/get_exams";
    let res = await this.fetch_url(url, "POST", id);
    console.log(res);
  };

  render() {
    return (
      <GroupSelector
        textArray={this.state.groups}
        onDataLoad={this.handleGroups}
      />
    );
  }
}

export default App;
