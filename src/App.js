import React, { Component } from 'react';
import IndexPage from './components/pages/IndexPage';


class App extends Component {
  //<Route path='/geriatrics' component={GeriatricsPage}></Route>
  render() {
    return (
       <IndexPage/>
    );
  }
}

export default App;
