import * as React from 'react';
import { renderRoutes } from 'react-router-config';

class DefaultLayout extends React.Component {
  componentDidMount(){
    if(this.props.location.params !== '/') {
      if (!window.localStorage.getItem('token')) {
        this.props.history.push('/');
      }
    }
  }
  render() {
    return (
      <div className="container-fluid">
        {renderRoutes(this.props.route.routes)}
      </div>
    );
  }
}

export default DefaultLayout;
