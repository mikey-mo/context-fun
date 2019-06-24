import React, { Component, createContext } from 'react';

export const AuthContext = createContext();

class AuthContextProvider extends Component {
  state = {
    isAuthenticated: false,
  }

  toggleAuth = () => {
    this.setState({ isAuthenticated: !this.state.isAuthenticated });
  }

  render() {
    const { isAuthenticated } = this.state;
    return (
      <AuthContext.Provider value={{ isAuthenticated, toggleAuth: this.toggleAuth }}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export default AuthContextProvider;
