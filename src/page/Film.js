import React, { Component } from 'react';
import { Table } from 'reactstrap';

import axios from 'axios';


class Film extends Component {

    state = {
    }

    componentDidMount(){
        axios.get(`http://www.omdbapi.com/?apikey=2c741d7&i=${this.props.match.params.film}&plot=full`)
            .then(response => {

                this.setState({ ...response.data })
                console.log(this.state)
            })
            .catch(error => console.log(error))   
    }

    render() {
     
        return(
            <section className="film-details">
                <h2 className="h3">{this.state.Title}</h2>
                <div className="film-poster">
                    <img src={this.state.Poster} alt={this.state.Title}/>
                </div> 
                <div className="film-params">
                    <Table borderless>
                        <tbody>
                            <tr>
                                <td>Year</td>
                                <td>{this.state.Year}</td>
                            </tr>
                            <tr>
                                <td>Country</td>
                                <td>{this.state.Country}</td>
                            </tr>
                            <tr>
                                <td>Genre</td>
                                <td>{this.state.Genre}</td>
                            </tr>
                            <tr>
                                <td>Director</td>
                                <td>{this.state.Director}</td>
                            </tr>
                            <tr>
                                <td>Writer</td>
                                <td>{this.state.Writer}</td>
                            </tr>
                            <tr>
                                <td>Actors</td>
                                <td>{this.state.Actors}</td>
                            </tr>  
                            <tr>
                                <td>Genre</td>
                                <td>{this.state.Genre}</td>
                            </tr>
                            <tr>
                                <td>BoxOffice</td>
                                <td>{this.state.BoxOffice}</td>
                            </tr>
                            <tr>
                                <td>DVD</td>
                                <td>{this.state.DVD}</td>
                            </tr>
                            <tr>
                                <td>Website</td>
                                <td><a href={this.state.Website}>{this.state.Website}</a></td>
                            </tr>
                            
                        </tbody>
                    </Table>
                </div>
                <div className="film-plot">
                    {this.state.Plot}
                </div>
            </section>
            
        )
    }
}

export default Film;