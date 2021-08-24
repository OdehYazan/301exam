import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import ApiCard from './ApiCard';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showCard: false,
      flowers: []
    }
  }

  componentDidMount = async () => {
    let resData = await axios.get(`${process.env.REACT_APP_SERVER}/getApiData`)

    this.setState({
      showCard: true,
      flowers: resData.data
    })
    // console.log(this.state.flowers);
  }

  addFun = async (data) => {
    const { user } = this.props.auth0;
    const userEmail = `${user.email}`
    axios.post(`${process.env.REACT_APP_SERVER}/AddToFav/${userEmail}`, data)
  }

  render() {
    return (
      <>
        <h1>API Flowers</h1>
        {this.state.showCard &&
          this.state.flowers.map((item, index) => {
            return (
              <ApiCard flower={item} idx={index} addFun={this.addFun} />
            )
          })
        }
      </>
    )
  }
}

export default withAuth0(Home);
