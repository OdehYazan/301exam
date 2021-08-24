import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'

export class ApiCard extends Component {
    render() {
        return (
            <Card style={{ width: '18rem' }} key={this.props.idx}>
                <Card.Img variant="top" src={this.props.flower.photo} />
                <Card.Body>
                    <Card.Title>{this.props.flower.name}</Card.Title>
                    <Card.Text>
                        {this.props.flower.instructions}
                    </Card.Text>
                    <Button variant="primary" onClick={()=>this.props.addFun(this.props.flower)}>ADD TO FAV</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default ApiCard
