import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Player extends Component{
  render(){
      
      return(
          <div className="container">
            <div className="d-flex justify-content-around">
                <div className="d-flex align-items-center">
                    <spam>Wp</spam>
                </div>
                <div>
                    <table>
                      <tr>
                        <th></th>
                        <th>T1</th>
                        <th>T2</th>
                      </tr>
                      <tr>
                        <td>Rank</td>
                        <td>6</td>
                        <td>12</td>
                      </tr>
                      <tr>
                        <td>Avg</td>
                        <td>21</td>
                        <td>17</td>
                      </tr>
                      <tr>
                        <td>H</td>
                        <td>45</td>
                        <td>64</td>
                      </tr>
                      <tr>
                        <td>HR</td>
                        <td>21</td>
                        <td>17</td>
                      </tr>
                      <tr>
                        <td>RBI</td>
                        <td>51</td>
                        <td>37</td>
                      </tr>
                      <tr>
                        <td>SB</td>
                        <td>4</td>
                        <td>7</td>
                      </tr>
                      <tr>
                        <td>W</td>
                        <td>10</td>
                        <td>12</td>
                      </tr>
                      <tr>
                        <td>ERA</td>
                        <td>3.23</td>
                        <td>4.45</td>
                      </tr>
                      <tr>
                        <td>S.O.</td>
                        <td>67</td>
                        <td>87</td>
                      </tr>
                      <tr>
                        <td>WHIP</td>
                        <td>.456</td>
                        <td>.345</td>
                      </tr>
                      <tr>
                        <td>B.B</td>
                        <td>23</td>
                        <td>21</td>
                      </tr>
                    </table>
                </div>
            </div>
            
            
            <div>
                <ul>
                  <li>Team 1
                    <ul>
                      <li>Player 1</li>
                      <li>Player 2</li>
                    </ul>
                  </li>
                  <li>Team 2</li>
                </ul>
            </div>
          </div>
      );
  }
}

export default Player;