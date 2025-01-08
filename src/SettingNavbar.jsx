import React, { useEffect } from 'react'
import { useState, useContext } from 'react'
import { playAgain, tilesClickIndexes, minesCount, randomNumContext, userLostContext, scoreContext } from './context/context'
import { createRadomNumber } from './createRandomNumber'

const SettingNavbar = () => {

  // const playAgainContext = useContext(playAgain)
  // const { tilesClickedIndexes, updateTilesClickedIndexes } = useContext(tilesClickIndexes)
  // const { mineCount, updateMineCount } = useContext(minesCount)
  const {score, setScore} = useContext(scoreContext)
  // const { randomNumbers, updateRandomNumbers } = useContext(randomNumContext)
  // const { userLost, updateUserLost } = useContext(userLostContext)
  const [inputValue, setInputValue] = useState(1)

  useEffect(() => {
    if (Number.parseInt(inputValue) >= 25 || Number.parseInt(inputValue) < 1) {
      setInputValue(inputValue)
    }
  }, [inputValue])

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  return (
    <div className='w-full z-50 opacity-95 fixed top-0 p-2 text-center min-h-12 text-2xl flex justify-around items-center bg-slate-600'>

      <div className='shadow-xl'>
        <img src="src\assets\minesWebLogo.jpg" alt="" className='object-cover w-32 h-16 rounded-md shadow-xl' />
      </div>
      <div>{score}</div>


      {/* <div className='flex justify-center items-center gap-x-2'>
        <div className=''>
          <input type="number" id="inputValue" value={inputValue} onChange={handleInputChange} className='text-black' />
          {Number.parseInt(inputValue) >= 25 || Number.parseInt(inputValue) < 1 ? <div className='text-xs text-red'>Enter value from 1 to 24</div> : null}
        </div>
        <div>
          <button
            disabled={Number.parseInt(inputValue) >= 25 || Number.parseInt(inputValue) < 1} className='text-slate-200 border p-2 px-4 rounded-md hover:shadow-white hover:shadow-md border-black bg-slate-800'
            onClick={() => { updateMineCount(inputValue) }}
          >
            Set
          </button>
        </div>
      </div> */}
    </div>
  )
}

export default SettingNavbar