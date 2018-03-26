import React, { Component } from 'react'
import axios from 'axios'


class DetailsList extends Component {

    state = {
        ideas: []
    }

    async componentWillMount() {
        try {
            var DogId = window.location.pathname[(window.location.pathname).length-1]
            const response = await axios.get(`/Dogs/${DogId}`)
            this.setState( {ideas: response.data} )
        } catch (error) {
            console.log('Error retrieving ideas!')
            console.log(error)
        }
    }

    handleChange = (event) => {
        const attributeToChange = event.target.name
        const newValue = event.target.value

        const updatedNewIdea = { ...this.state.newIdea }
        updatedNewIdea[attributeToChange] = newValue
        this.setState({ newIdea: updatedNewIdea })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        this.props.createIdea(this.state.newIdea)
    }



    render() {
        return (
            <div>
                <center>
                <h1>Dog</h1>
                    <input
                        name="Dog Breed"
                        value={this.state.ideas.title} />
                          <div>
                          <p><br></br></p>
                          </div>
                              <img src={this.state.ideas.image} alt="dog" height="420" width="420"/>
                          <div>
                          </div>
                              <h3> {this.state.ideas.description} </h3>
                          <div>
                           <p><br></br></p>
                          </div>

                          <form onSubmit={this.handleSubmit}>
                              <div>
                                  <label htmlFor="description">description</label>
                                  <input
                                      name="description"
                                      type="text"
                                      onChange={this.handleChange} />
                              </div>
                          </form>



                </center>
            </div>
        )
    }
}

export default DetailsList