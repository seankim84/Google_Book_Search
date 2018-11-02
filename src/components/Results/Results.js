import React from 'react';
import { Row, Col, Card } from 'antd';

const { Meta } = Card;

const Results = (props) => (
    props.list.map(result => (
        <Row key={result.id} >
            <Col>
            <Card 
                hoverable
                style={{width: 240}}
                cover = {
                        result.volumeInfo.imageLinks.thumbnail ? <img alt="BookCover" src={result.volumeInfo.imageLinks.thumbnail}/>: 
                        <img alt="Alternative_Cover" src=""/>
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
    ))
)

export default Results;
