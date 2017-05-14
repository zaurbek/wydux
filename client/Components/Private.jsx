import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { authed } from '../actions.js';

class Private extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      query: this.props.location.search.slice(7),
    };
  }
  componentDidMount() {
    this.fetchAllPrivate();
  }
  fetchAllPrivate() {
    this.props.authed();
  }
  render() {
    return (
      <div className="user">
          <Link to={`/user/newreleases/${this.props.location.search}`}><button className="btn btn-lg btn-primary">New Releases</button></Link>
        </div>
    );
  }
}

const PrivateWrapped = connect(
    null,
    (dispatch) => ({
      authed: () => dispatch(authed())
    })
)(Private);
export default PrivateWrapped;
