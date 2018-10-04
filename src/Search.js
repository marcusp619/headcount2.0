import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  handleChange = (e) => {
    this.setState({value: e.target.value});
    this.props.searchSchoolData(e.target.value);
  }

  render() {
    return (
      <input 
        className="search-component"
        placeholder="Search for school"
        value={this.state.value}
        onChange={this.handleChange}
      />
    )
  } 
}

Search.propTypes = {
  handleChange: PropTypes.func
}

export default Search;