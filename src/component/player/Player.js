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
                        <th>Stat</th>
                        <th>T1</th>
                        <th>T2</th>
                      </tr>
                      <tr>
                        <td>Rank</td>
                        <td>6</td>
                        <td>12</td>
                      </tr>
                      <tr>
                        <td>HR</td>
                        <td>21</td>
                        <td>17</td>
                      </tr>
                      <tr>
                        <td>B</td>
                        <td>32</td>
                        <td>24</td>
                      </tr>
                      <tr>
                        <td>H</td>
                        <td>45</td>
                        <td>64</td>
                      </tr>
                      <tr>
                        <td>W</td>
                        <td>10</td>
                        <td>12</td>
                      </tr>
                      <tr>
                        <td>L</td>
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