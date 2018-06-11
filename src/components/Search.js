import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


class Search extends Component {
 
    handleClick = (e) => {
        e.preventDefault();
        this.props.onSearch(this.refs.title.value);
        this.props.history.push('/');
    }


    render(){
        return ( 
            <form className="main-search">
                <div className="form-group">
                    <input type="text" ref="title" className="form-control" placeholder="поиск..." />
                </div>
                
                <button type="submit" className="btn btn-primary" onClick={ this.handleClick }>Search</button>
            </form>
        )    
    }
    
}

export default withRouter(Search);