import React, { Component } from 'react'
import axios from 'axios'


class DetailsList extends Component {

    state = {
        ideas: []
    }

    async componentWillMount() {
        try {
            var CatId = window.location.pathname[(window.location.pathname).length-1]
            const response = await axios.get(`/cats/${CatId}`)
            this.setState( {ideas: response.data} )
        } catch (error) {
            console.log('Error retrieving ideas!')
            console.log(error)
        }
    }


    render() {
        return (
            <div>
                <center>
                <h1>Cat</h1>
                    <input
                        name="Cat Breed"
                        value={this.state.ideas.title} />
                          <div>
                          <p><br></br></p>
                          </div>
                              <img src={this.state.ideas.image} alt="cat" height="420" width="420"/>
                          <div>
                           <p><br></br></p>
                          </div>


                </center>
            </div>
        )
    }
}

export default DetailsList