import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Poorvi",
        email: "test@test.com",
        phone: "123456789"
      },
      {
        id: 2,
        name: "Piyush",
        email: "Piyush@test.com",
        phone: "898456789"
      },
      {
        id: 3,
        name: "Nidhi",
        email: "Nidhi@test.com",
        phone: "345456789"
      }
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
