import React, { Component } from 'react';
import { Input } from 'antd';
import axios from 'axios';
import  { apiKey }  from '../../auth/apiKey';
import Results from '../Results/Results';

const SearchInput = Input.Search;

class Search extends Component {
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
            .then(res => this.setState({ list: res.data.items }))
            .catch(err => console.log(err))
        }
    })
  };

  render() {
    return (
      <div style={{width: "100%"}}>
          <div>
          <SearchInput 
            name="search"
            id="adornment-amount"
            value={this.state.search}
            onChange={this.handleChange} 
            placeholder="Search Book"
            style ={{width: "100%"}}
            />
          </div>
        {this.state.list != null ? (
          <div style={{ display:"grid", 
                        width:"auto",
                        gridTemplateColumns:"1fr 1fr", 
                        marginTop: "1rem", gridGap:"10px", 
                        justifyItems:"center" }}>
            <Results list={this.state.list} />
          </div>
            ): "Empty" }

      </div>
    );
  }
}


export default Search;
