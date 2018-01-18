import React, {Component} from 'react';

import PostField from './post-section';

export default class App extends Component{

    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            post: "My initial state"
        }
    }

    handleSubmit(e){
        this.setState({
            post: e
        });
    }

    render(){
        return(
            <div>
                <PostField
                    submit={this.handleSubmit}
                />
                <p>Output here: {this.state.post}</p>
            </div>

        );
    }
};