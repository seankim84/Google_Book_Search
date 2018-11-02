import React, { Component } from 'react';
import Search from './components/Search/Search';
import { Row, Col } from 'antd';

class App extends Component {
  render() {
    return (
      <div style={{marginTop:"1rem"}}>
        <Row type="flex" justify="center">
          <Col span={18}>
            <Search />  
          </Col>
        </Row>
            
        
      </div>
    );
  }
}

export default App;
