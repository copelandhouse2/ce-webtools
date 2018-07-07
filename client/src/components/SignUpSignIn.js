import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class SignUpSignIn extends Component {
  constructor() {
    super();
    this.state = {

    };

    this._initState = {...this.state};

  }

  componentDidMount() {

  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {

    
    return (

      <div>
        <h1>Hello</h1>
        <Button>
          Save
        </Button>
      </div>

    );
  }

}
export default (SignUpSignIn);
