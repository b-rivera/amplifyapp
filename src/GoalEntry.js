import React, { Component } from 'react';
import List from './List';

export default class GoalEntry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            items: []
        };
    }

    onChange = (event) => {
        this.setState({ term: event.target.value });
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.setState({
        term: '',
        items: [...this.state.items, this.state.term]
        });
    }

    render() {
        return (
        <div className="main-container">
            <div className="form-container">
                <form className="App" onSubmit={this.onSubmit}>
                    <input value={this.state.term} onChange={this.onChange} />
                    <button>Submit</button>
                </form>
            </div>
            <List title={this.props.title} items={this.state.items} />
        </div>
        );
    }
}