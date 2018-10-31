import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import  { apiKey }  from '../../auth/apiKey';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import List from '../List/List';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  withoutLabel: {
    marginTop: theme.spacing.unit * 3,
  },
  textField: {
    flexBasis: 200,
  },
});

class Search extends React.Component {

  state = {
    search: '',
    list: [],
    apiUrl: `https://www.googleapis.com/books/v1/volumes?`
  };

  handleChange = (e) => {
    const val = e.target.value;
    this.setState({[e.target.name]: val }, () => {
        if(val === '') {
            this.setState({ list: [] })
        } else {
            axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.state.search}&key=${apiKey}`)
            .then(res => this.setState({list: res.data.items}))
            .catch(err => console.log(err))
        }
    })
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <FormControl fullWidth className={classes.margin}>
          <InputLabel htmlFor="adornment-amount">Search the Book</InputLabel>
          <Input
            name="search"
            id="adornment-amount"
            value={this.state.search}
            onChange={this.handleChange}
          />
        </FormControl>
        <br />
        {this.state.list.length > 0 ? (
            <List list={this.state.list}/>
            ): "Empty" }
      </div>
    );
  }
}

Search.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Search);
