import React, { Component } from 'react';
import Buttons from '../components/buttons';
import ResultDislay from "../components/resultDislay";
import '../App.css';
class Main extends Component {
    constructor() {
        super();

        this.state = {
            result: ""
        }
    }

    onClick = button => {

        if (button === "=") {
            this.calculate()
        }

        else if (button === "clear") {
            this.reset()
        }

        else {
            this.setState({
                result: this.state.result + button
            })
        }
    };
    calculate = () => {
        var checkResult = ''
        if (this.state.result) {
            checkResult = this.state.result
        }

        else {
            checkResult = this.state.result

        }

        try {
            this.setState({
                result: (eval(checkResult) || "") + ""
            })
        }

        catch (e) {
            this.setState({
                result: "error"
            })
        }
    };

    reset = () => {
        this.setState({
            result: ""
        })
    };



    render() {
        return (
            <div>
                <div className='cal-body'>

                    <ResultDislay result={this.state.result} />
                    <Buttons onClick={this.onClick} />
                </div>
            </div>
        );
    }
}

export default Main;

