import React, { Component } from 'react';
import { Input, Icon } from 'antd';
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
      <div style={{ display: "grid", width: "100%" }}>
        <div style={{ display: "grid", gridTemplateColumns: "6fr 1fr"}}>
          <h1>Search the Google Books</h1>
          <div style={{ width :"80%", display: "grid", gridAutoFlow:"column", justifyContent: "space-between", marginTop: "0.5rem", fontSize:"30px"}}>
            <a type="text" href="https://github.com/seankim84"><Icon type="github" theme="outlined"/></a>
            <a type="text" href="https://www.linkedin.com/in/hyeon-gyu-kim-b59691112/"><Icon type="linkedin" theme="outlined"/></a>
            <a type="text" href="https://www.linkedin.com/in/hyeon-gyu-kim-b59691112/"><Icon type="link" theme="outlined" /></a>
          </div>
        </div>
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
                        marginTop: "2rem", gridGap:"10px", 
                        justifyItems:"center" }}>
            <Results list={this.state.list} />
          </div>
            ): "Empty" }

      </div>
    );
  }
}


export default Search;
