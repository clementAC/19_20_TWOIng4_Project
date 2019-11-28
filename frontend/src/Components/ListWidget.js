import ListGroup from 'react-bootstrap/ListGroup';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LineWidget from './LineWidget';


export default class ListWidget extends React.Component {
    render() {
        return (
            <div>

            <ListGroup>
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>

            

            </div>

        )
    }

    
}
