import React, { Component } from 'react';
import Search from './components/Search'
import Container from './components/Container';
import Films from './components/Films';
import Film from './page/Film';
import Error from './components/Error';
import Navigation from './components/Navigation';
import axios from 'axios';

import { Route, Switch } from 'react-router-dom';

class App extends Component {
    state = {
        films: [],
        status: true,
        error: ''
    }

    handleSearch = (title) => {
        axios.get(`http://www.omdbapi.com/?apikey=2c741d7&s=${title}`)
            .then( (response) => {
                this.setState({
                    films: response.data.Search,
                    status: (response.data.Response.toLowerCase()==='true') ? true : false,
                    error: response.data.Error
                })
                console.log(response)  
            })
            .catch(error => console.log(error));
    }
    render() {
        return (
            <main>
                
                
                
                <Container>
                    <Navigation />
                    <Search onSearch={ this.handleSearch }/>
                    <Switch>
                        <Route exact path="/" render={
                            ()=> (this.state.status) ? <Films data={this.state.films} /> : <Error error={this.state.error}/>
                        }/>
                        <Route path="/:film" render={
                            (props) => <Film {...props}/>
                        } />
                    </Switch>
                </Container>

            </main>   
        );
    }
}

export default App;
