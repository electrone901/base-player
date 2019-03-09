import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Options extends Component {
    constructor() {
        super();
        this.state = {
            data:''
        }
    }
    render() {
        return (
                <section className="container">
                    <h1 className="title">Options View</h1>   
                    <Link to="/players">Choose Team</Link><br/>
                    <Link to="/players">Choose Players</Link>
                </section>
        )
    }
}

export default Options;
