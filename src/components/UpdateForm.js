import React, { Component } from 'react'
import { Form,Button } from 'react-bootstrap';

export class UpdateForm extends Component {
 
    render() {
        return (
            <Form onSubmit={this.props.updateFun}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
             
              <Form.Control type="text" name='name' defaultValue={this.props.formData.name} />
              <Form.Control type="text" name='photo' defaultValue={this.props.formData.photo} />
              <Form.Control type="text" name='instructions' defaultValue={this.props.formData.instructions}/>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        )
    }
}

export default UpdateForm
