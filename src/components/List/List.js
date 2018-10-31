import React, { Component } from 'react';

class List extends Component {
    render(){
        const { list } = this.props;
        let bookImageContent;

        if(list) {
            bookImageContent = list.map(lists => (
                <div key={lists.id}>
                    <div>title:{lists.volumeInfo.title}</div>
                </div>
            ))
        }
        return (
            <div>
                {bookImageContent}
            </div>
        )
    }
};

export default List;
