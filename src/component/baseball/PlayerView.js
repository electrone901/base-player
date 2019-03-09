import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import image2 from '../../img/stocks.png';
import Spinner from '../common/Spinner';

class PlayerView extends Component {
    constructor() {
        super();
        this.state = {
            data: [
                {'img':'img/MikeTrout.png',  'Name':'Jose Altuve', 'ID':'1616381c-d6ac-40b1-8c3f-c70d51bda098', 'Type':'Hitter', 'Position':'2B'},
				{'img':'img/JoseAltuve.png',  'Name':'Victor Martínez', 'ID':'f27a7574-57db-4eeb-8f88-377048806de2', 'Type':'Hitter', 'Position':'1B,C'},
				{'img':'img/MichaelBrantley.png',  'Name':'Michael Brantley', 'ID':'e7a7c661-1c6f-42a1-b4fb-edc2da7fb750', 'Type':'Hitter', 'Position':'LF'},
				{'img':'img/AdrianBeltre.png',  'Name':'Adrián Béltre', 'ID':'5aa0effe-3eea-4f1d-b4e2-d2d65069cc90', 'Type':'Hitter', 'Position':'3B,1B'},
				{'img':'img/JoséAbreu.png',  'Name':'José ABreu', 'ID':'b59c6ed2-061e-4c9b-b624-2d1aee74853c', 'Type':'Hitter', 'Position':'1B'},
				{'img':'img/JoshuaHarrison.png',  'Name':'Joshua Harrison', 'ID':'0e762dec-639f-497f-a65b-af0eaa8be39f', 'Type':'Hitter', 'Position':'1B,2B'},
				{'img':'img/RobinsonCanó.png',  'Name':'Robinson Canó', 'ID':'ad04a64e-057a-4576-81bd-28bf71f3a6ea', 'Type':'Hitter', 'Position':'2B'},
				{'img':'img/AndrewMcCutchen.png',  'Name':'Andrew McCutchen', 'ID':'53a80099-966e-451c-a1e2-dccbb16f8dd8', 'Type':'Hitter', 'Position':'RF,LF'},
				{'img':'img/MiguelCabrera.png',  'Name':'Miguel Cabrera', 'ID':'0fad748a-3ed8-4787-97db-845155c8e7ce', 'Type':'Hitter', 'Position':'3B,1B'},
				{'img':'img/BusterPosey.png',  'Name':'Buster Posey', 'ID':'898c62b6-95bf-4973-a435-c6cb42a52158', 'Type':'Hitter', 'Position':'C,1B'},
				{'img':'img/BenRevere.png',  'Name':'Ben Revere', 'ID':'f4b89e5f-baae-4dd4-87b2-1cd75889b48b', 'Type':'Hitter', 'Position':'CF'},
				{'img':'img/JhonnyCueto.png',  'Name':'Jhonny Cueto', 'ID':'1a574c70-eb33-4202-ab97-548645a4d15e', 'Type':'Pitcher', 'Position':'SP'},
				{'img':'img/ClaytonKershaw.png',  'Name':'Clayton Kershaw', 'ID':'d3351c6e-12cf-4ab5-b651-ad23d49c4245', 'Type':'Pitcher', 'Position':'SP'},
				{'img':'img/DallasKeuchel.png',  'Name':'Dallas Keuchel', 'ID':'77bb98d3-51ff-40c4-89cb-219ff98496f5', 'Type':'Pitcher', 'Position':'SP'},
				{'img':'img/AdamWainwright.png',  'Name':'Adam Wainwright', 'ID':'c399c961-1b45-430c-858e-f0a33ae0af85', 'Type':'Pitcher', 'Position':'SP'},
				{'img':'img/JulioTeherán.png',  'Name':'Julio Teherán', 'ID':'57943e75-0e1c-4b96-8ded-479db4a6351c', 'Type':'Pitcher', 'Position':'SP'},
				{'img':'img/MadisonBumgarner.png',  'Name':'Madison Bumgarner', 'ID':'f05364d7-024b-4699-b947-c8bb42c968bc', 'Type':'Pitcher', 'Position':'SP'},
				{'img':'img/HendersonAlvarez.png',  'Name':'Henderson Alvarez', 'ID':'0dbeec6c-890d-4d8f-9044-575c8d5c3e5e', 'Type':'Pitcher', 'Position':'SP'},
				{'img':'img/CoreyKluber.png',  'Name':'Corey Kluber', 'ID':'48982279-0e43-4d94-95fb-fd5e623b54b6', 'Type':'Pitcher', 'Position':'SP'},
				{'img':'img/DavidPrice.png',  'Name':'David Price', 'ID':'875b903a-aabd-424e-b70e-1aa46a7334bc', 'Type':'Pitcher', 'Position':'SP'},
				{'img':'img/JordanZimmerman.png',  'Name':'Jordan Zimmerman', 'ID':'8f131591-cc6e-43ad-a6e2-b15963fcb6ba', 'Type':'Pitcher', 'Position':'SP'}
            ]
        }
    }
    render() {
        return (
                <div className="container">

                    <div className="row justify-content-center">
                        <div className="col-4 col-sm-4 col-md-4">
                            <div className="">
                                <img src={this.state.data[0].img} alt="details" className="rounded-circle img-thumbnail thumbnail-review"/>
                            </div>
                            <div className="author-div">
                                <p className="author-name">Jose Altuve</p>
                            </div>
                        </div>
                        <div className="col-4 col-sm-4 col-md-4">
                            <h1 className="btn-reaction">800 Points</h1><br/>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <button className="btn btn-info-helpful">Batting Avg 315</button>
                        <button className="btn btn-info-helpful">Home Run 25</button>
                        <button className="btn btn-info-helpful">RBI 90</button>
                        <button className="btn btn-info-helpful">Hits 120</button>
                        <button className="btn btn-info-helpful">Runs 100</button>
                        <button className="btn btn-info-helpful">SB 15</button>
                    </div>
                    
                    <div className="row space-top">
                        <div className="col-8 col-sm-8 col-md-8">
                            <p>Name</p>
                        </div>
                        <div className="col-4 col-sm-4 col-md-4 text-right addReview">
                            <p>Add to team</p>
                        </div>
                    </div>
                    
                    {   
                        this.state.data ? this.state.data.map((review, key) => {
                            console.log('review',review)
                            // ID: "f27a7574-57db-4eeb-8f88-377048806de2"

                            // img: "img/JoseAltuve.png"
                            return( 
                                <div key={key}>
                                    <div className="row justify-content-center">

                                        <div className="col-9 col-sm-9 col-md-9">
                                            <div className="container2">
                                            <img src={review.img} alt="details" className="rounded-circle img-thumbnail thumbnail-review"/>
                                                <p className="author-name">{review.Name}</p>
                                            </div>
                                        </div>
                        
                                        <div className="col-3 col-sm-3 col-md-3">
                                            <div className="helpful container2">
                                                <button className="btn btn-success">+</button>
                                                <button className="btn btn-danger">-</button>
                                            </div>
                                        </div>
                                    
                                    </div>
                                    <hr/>
                                </div>
                            )
                        }):<Spinner />
                    }
                </div>
        )
    }
}


export default PlayerView;
