import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Slider from '../carousel/Slider';
class Options extends Component {
    constructor() {
        super();
        this.state = {
            data:''
        }
    }
    render() {
        return (
                <section className="container text-center">
                    <Slider />
                    <h1 className="title">Fantasy Team Players: Keep or Switch?</h1> <br/>  
                    <Link className="btn btn-success" to="/team">Choose Team</Link><br/> <br/>
                    <Link className="btn btn-success" to="/players">Choose Players</Link>
                </section>
        )
    }
}

export default Options;
