import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";

import Main from "../Main";

class App extends PureComponent {
  static propTypes = {
    store: PropTypes.object
  };

  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <Main/>
      </Provider>
    );
  }
}

export default App;
