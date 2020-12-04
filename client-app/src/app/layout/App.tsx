import React, { Component } from "react";
import { Header, Icon, List } from "semantic-ui-react";
import axios from "axios";
import "semantic-ui-css/semantic.min.css";

class App extends Component {
  state = {
    activities: [],
  };

  componentDidMount() {
    axios.get("http://localhost:5000/api/activities").then((response) => {
      this.setState({
        activities: response.data,
      });
    });
  }

  render() {
    return (
      <>
        <Header as="h2">
          <Icon name="users" />
          <Header.Content>Reactivities</Header.Content>
        </Header>
        <List>
          {this.state.activities.map((activity: any) => (
            <List.Item key={activity.id}>{activity.title}</List.Item>
          ))}
        </List>
      </>
    );
  }
}

export default App;
