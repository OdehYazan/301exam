import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'
export class FavCard extends Component {
    render() {
        return (
            <Card style={{ width: '18rem' }} index={this.props.key}>
                <Card.Img variant="top" src={this.props.myFlower.photo} />
                <Card.Body>
                    <Card.Title>{this.props.myFlower.name}</Card.Title>
                    <Card.Text>
                        {this.props.myFlower.instructions}
                    </Card.Text>
                    <Button variant="primary" onClick={()=>this.props.deleteFun(this.props.myFlower)} >Delete</Button>
                    <Button variant="primary" onClick={()=>this.props.showUpdateForm(this.props.myFlower)}>Update</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default FavCard
