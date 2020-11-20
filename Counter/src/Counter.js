import React, {Component} from 'react';
class Counter extends Component{
    constructor () {
        super()
        this.handleClick=this.handleClick.bind(this)
    }
    state= {
        count1:0,
        count2:10,
    }
    handleClick() {
        this.setState({
            count1:this.state.count1+1
            
        });
        this.setState({
            count2:this.state.count2-1
            
        });
           }
    render() {
        return (
            <div> 
                <p> {this.state.count1}</p>
                <p> {this.state.count2}</p>
                <button onClick={this.handleClick}>Click me1</button>
                <button onClick={this.handleClick}>Click me2</button>
            </div>
        );
    }
}