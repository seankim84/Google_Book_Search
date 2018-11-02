import React from 'react';
import { Row, Col, Card } from 'antd';
import AlterNative from '../../img/googlelogo.gif';

const { Meta } = Card;

const Results = ( props ) => (
    props.list.map(result => (
        <div key={result.id} >
            <Row className="gutter-example" gutter={16}> 
                <Col className="gutter-row" span={6}>
                <Card  
                    hoverable
                    style={{ width: 300 }}
                    cover = {
                            result.volumeInfo.imageLinks ? <img alt="BookCover" src={result.volumeInfo.imageLinks.thumbnail}/>: 
                            <img alt="Alternative_Cover" src={ AlterNative }/>
                        } 
                    >
                <Meta 
                    title = {result.volumeInfo.title}
                    description={
                        <a href={result.volumeInfo.infoLink}>
                            {result.volumeInfo.infoLink}
                        </a>
                    }
                />
                </Card>
                </Col>
            </Row>
        </div>
    ))
)

export default Results;
