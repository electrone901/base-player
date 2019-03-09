import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class PlayerView extends Component {
    constructor() {
        super();
        this.state = {
            data:''
        }
    }
    render() {
        return (
                <section className="container">
                    <h1 className="title">PlayerView</h1>   
                </section>
        )
    }
}

export default PlayerView;