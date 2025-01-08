import React, { useContext, useEffect, useRef, useState } from 'react'
import { minesCount, playAgain, tilesClickIndexes, randomNumContext, userLostContext, scoreContext } from './context/context';
import { createRadomNumber } from './createRandomNumber';

const Playsection = () => {

    const { mineCount, updateMineCount } = useContext(minesCount)
    const { tilesClickedIndexes, updateTilesClickedIndexes } = useContext(tilesClickIndexes)
    const { randomNumbers, updateRandomNumbers } = useContext(randomNumContext)
    const { userLost, updateUserLost } = useContext(userLostContext)
    const { score, setScore } = useContext(scoreContext)
    const playAgainContext = useContext(playAgain)

    const [tileWhichIsClicked, updateTileWhichIsClicked] = useState(0)
    const [userWon, updateUserWon] = useState([])
    // const [randomNumbers, updateRandomNumbers] = useState([])
    const [allIndexes, updateAllIndexes] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]);
    // const [userLost, updateUserLost] = useState(false)

    const tiles = [];
    for (let i = 1; i < 26; i++) {
        tiles.push(<div key={i}>{`tile No ${i}`}</div>)
    }

    const playLogic = (key) => {
        if (randomNumbers.includes(key)) {

            // console.log("user lost", randomNumbers, tileWhichIsClicked)
            updateUserLost(true)
            updateTilesClickedIndexes(prev => [...prev, ...allIndexes])
            playAgainContext.updatePlayItAgain(true);

        } else {
            // alert("user won", latestRandomNumber, tileWhichIsClicked)
            // console.log("user won", randomNumbers, tileWhichIsClicked)
            updateUserWon(prev => [...prev, key]);
            if (score === 0) {
                setScore(100);
            } else if (score >= 100 && score < 1000) {
                setScore(score => score + 200)
            } else if (score >= 1000 && score < 2000) {
                setScore(score => score + 800)
            } else if (score >= 2000 && score < 4000) {
                setScore(score => score + 1000)
            } else if (score > 4000) {
                setScore(score => score + 1200)
            }
        }
        // console.log(latestRandomNumber, tileWhichIsClicked)
    }

    useEffect(() => {
        for (let i = 0; i < mineCount; i++) {
            updateRandomNumbers(prev => [...prev, createRadomNumber(1, 25)])
        }
        // console.log("for First time", mineCount)
    }, [])



    useEffect(() => {
        //     console.log(randomNumbers)
        updateAllIndexes(prev => prev.filter(item => !randomNumbers.includes(item)))
    }, [randomNumbers])


    return (
        <div className="min-h-[70%] min-w-[40%]">
            <div className='grid grid-cols-5'>
                {
                    tiles.map((item) => {
                        if (tilesClickedIndexes.includes(Number.parseInt(item.key))) {
                            return <button className='text-slate-500 bg-slate-800 m-2 min-h-28 min-10 rounded-md flex justify-center items-center relative ' key={item.key} disabled={true}
                            >{
                                    userWon.includes(Number.parseInt(item.key)) ?
                                        <img src="src\assets\diamond.png" alt="diamond" className='size-16 animate-ping' />
                                        :
                                        <img src="src\assets\diamond.png" alt="diamond" className='size-16 invert animate-bounce' />

                                }
                            </button>
                        }

                        return <div className='bg-slate-800 m-2 min-h-28 min-10 rounded-md flex justify-center items-center relative hover:bottom-2 ' key={item.key}

                        >
                            {
                                userLost ?
                                    <button disabled={true} >
                                        <img src="src\assets\bomb.png" alt="" className='size-16 animate-spin' />
                                    </button>
                                    :
                                    <img src="src\assets\bomb.png" alt="" className='size-16 animate-pulse hover:cursor-pointer'
                                        onClick={() => {
                                            updateTileWhichIsClicked(Number.parseInt(item.key));
                                            if (!randomNumbers.includes(Number.parseInt(item.key))) {
                                                updateTilesClickedIndexes(prev => [...prev, Number.parseInt(item.key)])
                                            }
                                            playLogic(Number.parseInt(item.key));
                                        }}
                                    />
                            }
                        </div>
                    })
                }
            </div>

        </div>
    )
}

export default Playsection