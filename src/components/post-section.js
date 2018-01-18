import React, {Component} from 'react';

export default class App extends Component{
    constructor(props){
        super(props);
        this.handlePost = this.handlePost.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.handleList = this.handleList.bind(this);

        this.state = {
            list: []
        }
    }

    handleClear(){
        this.refs.post.value = '';
    }

    handlePost(){
        this.props.submit(this.refs.post.value);
        this.state.list.push(this.refs.post.value);
        this.setState(
            {
                list: this.state.list
            }
        )
    }

    handleList(list) {
        return list.map(function(listItem) {
                return (<li>{listItem}</li>);
            }
        );
    }

    render(){
        return(
            <div>
                <input placeholder="insert text here" ref="post"/>
                <button onClick={this.handlePost}>Post</button>
                <button onClick={this.handleClear}>Clear</button>
                <ul>{this.handleList(this.state.list)}</ul>
            </div>
        );
    }
};

