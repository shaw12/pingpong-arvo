import React, { useContext } from 'react'
import { TrackContext } from '../TrackContext'

function Track() {

    const { names, winOne, winTwo, setWinOne, setWinTwo } = useContext(TrackContext)
    var winnerScore;

    const handleClickOne = () => {
        const newWin = winOne + 1 ;
        setWinOne(newWin)
    }
    const handleClickTwo = () => {
        const newWin = winTwo + 1 ;
        setWinTwo(newWin)
    }

    const winnerChecker = () => {
        if(winOne || winTwo){
            if(winOne > winTwo){
                winnerScore = winOne - winTwo
                return names.playerOne
            }
            else if(winOne === winTwo){
                winnerScore = "Tie"
                return "Tie"
            }

            else{
                winnerScore = winTwo - winOne
                return names.playerTwo
            }
        } else{
            winnerScore = "NA"
            return "NA"
        }
    }

    return (
        <div className="details">
            
            <div className="card">
                <div className="head">
                    <h2>{names.playerOne}</h2>
                    <button onClick={handleClickOne}>Add Win</button>
                </div>
                <div className="body">
                    <p>Wins: </p>
                    <h1>{winOne}</h1>
                </div>
            </div>

            <div className="card">
                <div className="head">
                    <h2>{names.playerTwo}</h2>
                    <button onClick={handleClickTwo}>Add Win</button>
                </div>
                <div className="body">
                    <p>Wins: </p>
                    <h1>{winTwo}</h1>
                </div>
            </div>

            <div className="line"></div>

            <div className="winnerSec">
                <div className="body win__body">
                    <p className="win">Current Winner: </p>
                    <p>{winnerChecker()}</p>
                </div>
                <div className="body win__body">
                    <p className="win">Win difference: </p>
                    <p>{winnerScore}</p>
                </div>
            </div>
            
        </div>
    )
}

export default Track
