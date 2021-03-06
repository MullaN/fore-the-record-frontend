import React, {Component} from 'react'
import Score from '../Components/Score'

class ScoreCardContainer extends Component {
    state = {
        rounds: []
    }

    componentDidMount(){
        fetch(this.props.url)
        .then(resp => resp.json())
        .then(rounds => {
            rounds.name ? this.setState({rounds: rounds.top_ten_rounds}) : this.setState({ rounds })})
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.url !== this.props.url){
        fetch(this.props.url)
        .then(resp => resp.json())
        .then(rounds => {
            rounds.name ? this.setState({rounds: rounds.top_ten_rounds}) : this.setState({ rounds })})
        }
      }

    render(){
        return(
            <div className="Scorecard">
                <br />
                <table>
                    <tr>
                        <th>User</th>
                        <th>Course</th>
                        <th>Score</th>
                        <th>1</th>
                        <th>2</th>
                        <th>3</th>
                        <th>4</th>
                        <th>5</th>
                        <th>6</th>
                        <th>7</th>
                        <th>8</th>
                        <th>9</th>
                        <th>10</th>
                        <th>11</th>
                        <th>12</th>
                        <th>13</th>
                        <th>14</th>
                        <th>15</th>
                        <th>16</th>
                        <th>17</th>
                        <th>18</th>
                    </tr>
                    {this.state.rounds.error ? null : this.state.rounds.map(round => <Score round={round} key={round.id}/>)}
                </table>
                <br />
            </div>
        )
    }
}

export default ScoreCardContainer