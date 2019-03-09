import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Player extends Component{
  render(){
      
      return(
          <div className="container">
            <div className="d-flex flex-column ml-auto" style={{'width': '200px'}}>
                <button className="btn btn-light mb-2">Choose Team</button>
                <button className="btn btn-primary mb-2">Choose Players</button>
            </div>
            <div className="d-flex justify-content-around">
                <div className="d-flex align-items-center">
                    <div className="d-flex flex-column">
                        <spam className="text-center">Predicted to Win</spam>
                        <div className="bg-light p-5">
                            <spam>Team Name</spam>
                        </div>
                    </div>
                </div>
                <div className="mb-2">
                    <table>
                      <tr>
                        <th></th>
                        <th>T1</th>
                        <th>T2</th>
                      </tr>
                      <tr>
                        <td className="badge badge-light px-3">Rank</td>
                        <td>6</td>
                        <td>12</td>
                      </tr>
                      <tr>
                        <td className="badge badge-light px-3">Avg</td>
                        <td>21</td>
                        <td>17</td>
                      </tr>
                      <tr>
                        <td className="badge badge-light px-3">H</td>
                        <td>45</td>
                        <td>64</td>
                      </tr>
                      <tr>
                        <td className="badge badge-light px-3">HR</td>
                        <td>21</td>
                        <td>17</td>
                      </tr>
                      <tr>
                        <td className="badge badge-light px-3">RBI</td>
                        <td>51</td>
                        <td>37</td>
                      </tr>
                      <tr>
                        <td className="badge badge-light px-3">SB</td>
                        <td>4</td>
                        <td>7</td>
                      </tr>
                      <tr>
                        <td className="badge badge-light px-3">W</td>
                        <td>10</td>
                        <td>12</td>
                      </tr>
                      <tr>
                        <td className="badge badge-light px-3">ERA</td>
                        <td>3.23</td>
                        <td>4.45</td>
                      </tr>
                      <tr>
                        <td className="badge badge-light px-3">S.O.</td>
                        <td>67</td>
                        <td>87</td>
                      </tr>
                      <tr>
                        <td className="badge badge-light px-3">WHIP</td>
                        <td>.456</td>
                        <td>.345</td>
                      </tr>
                      <tr>
                        <td className="badge badge-light px-3">B.B</td>
                        <td>23</td>
                        <td>21</td>
                      </tr>
                    </table>
                </div>
            </div>
            
            <div className="d-flex mb-1">
              <spam className="ml-auto">Add to Compare</spam>
            </div>
            
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-column" style={{'width': '150px'}}>
                  <spam className="badge badge-light px-3 my-1">Team Name 1</spam>
                  <spam className="badge badge-primary px-3 my-1">Team Name 2</spam>
                  <spam className="badge badge-primary px-3 my-1">Team Name 3</spam>
                  <spam className="badge badge-primary px-3 my-1">Team Name 4</spam>
                  <spam className="badge badge-primary px-3 my-1">Team Name 5</spam>
                  <spam className="badge badge-primary px-3 my-1">Team Name 6</spam>
                  <spam className="badge badge-primary px-3 my-1">Team Name 7</spam>
                  <spam className="badge badge-primary px-3 my-1">Team Name 8</spam>
                  <spam className="badge badge-primary px-3 my-1">Team Name 9</spam>
              </div>
              
              <div className="d-flex flex-column">
                <div className="mb-1">
                  <button className="bg-success mr-3 py-0">+</button>
                  <button className="bg-danger py-0">-</button>
                </div>
                <div className="mb-1">
                  <button className="bg-success mr-3 py-0">+</button>
                  <button className="bg-danger py-0">-</button>
                </div>
                <div className="mb-1">
                  <button className="bg-success mr-3 py-0">+</button>
                  <button className="bg-danger py-0">-</button>
                </div>
                <div className="mb-1">
                  <button className="bg-success mr-3 py-0">+</button>
                  <button className="bg-danger py-0">-</button>
                </div>
                <div className="mb-1">
                  <button className="bg-success mr-3 py-0">+</button>
                  <button className="bg-danger py-0">-</button>
                </div>
                <div className="mb-1">
                  <button className="bg-success mr-3 py-0">+</button>
                  <button className="bg-danger py-0">-</button>
                </div>
                <div className="mb-1">
                  <button className="bg-success mr-3 py-0">+</button>
                  <button className="bg-danger py-0">-</button>
                </div>
                <div className="mb-1">
                  <button className="bg-success mr-3 py-0">+</button>
                  <button className="bg-danger py-0">-</button>
                </div>
              </div>
              
            </div>
          </div>
      );
  }
}

export default Player;