import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";

class GroupSelector extends Component {
  render() {
    const { textArray } = this.props;
    return (
      <Dropdown>
        <Dropdown.Toggle variant="success m-2" id="dropdown-basic">
          Groups
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {textArray.map((items, key) => (
            <Dropdown.Item
              eventKey={key}
              key={key}
              onClick={() => this.props.onDataLoad(items)}
            >
              {items}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

export default GroupSelector;
