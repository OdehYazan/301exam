import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios'
import FavCard from './FavCard';
import UpdateForm from './UpdateForm';

class FavFlowers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCard: false,
      showForm: false,
      selectedFlower: {},
      flowers: [],
    }
  }

  componentDidMount = async () => {
    const { user } = this.props.auth0;
    const userEmail = `${user.email}`
    let resData = await axios.get(`${process.env.REACT_APP_SERVER}/GetFav/${userEmail}`)

    await this.setState({
      showCard: true,

      flowers: resData.data
    })
    console.log(this.state.flowers);
  }

  deleteFun = async (data) => {
    const id = data._id
    const { user } = this.props.auth0;
    const userEmail = `${user.email}`
    let resData = await axios.delete(`${process.env.REACT_APP_SERVER}/Delete/${userEmail}/${id}`)
    await this.setState({
      flowers: resData.data
    })
  }

  showUpdateForm = async (data) => {

    await this.setState({
      showForm: true,
      selectedFlower: data,
    })
  }

  updateFun = async (event) => {
    event.preventDefault();
    const id = this.state.selectedFlower._id;
    const { user } = this.props.auth0;
    const userEmail = `${user.email}`

    let newData = {
      instructions: event.target.instructions.value,
      photo: event.target.photo.value,
      name: event.target.name.value
    }

    let resData = await axios.put(`${process.env.REACT_APP_SERVER}/Update/${userEmail}/${id}`, newData)

    await this.setState({
      flowers: resData.data,
      showForm: false,
    })
  }

  render() {
    return (
      <>
        <h1>My Favorite Flowers</h1>

        {this.state.showCard &&
          this.state.flowers.map((item, index) => {
            return (
              <FavCard myFlower={item} key={index} deleteFun={this.deleteFun} showUpdateForm={this.showUpdateForm} />
            )
          })
        }

        {this.state.showForm &&
          <UpdateForm formData={this.state.selectedFlower} updateFun={this.updateFun} />
        }
        {/* {this.state.showForm &&
          <Form onSubmit={this.updateFun}>
            <Form.Group className="mb-3" controlId="formBasicEmail">

              <Form.Control type="text" name='name' defaultValue={this.state.selectedFlower.name} />
              <Form.Control type="text" name='photo' defaultValue={this.state.selectedFlower.photo} />
              <Form.Control type="text" name='instructions' defaultValue={this.state.selectedFlower.instructions} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        } */}
      </>
    )
  }
}

export default withAuth0(FavFlowers);