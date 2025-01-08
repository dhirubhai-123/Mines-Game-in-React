import { useState } from 'react'
import Playsection from './Playsection';
import SettingNavbar from './SettingNavbar';
import { minesCount, playAgain, tilesClickIndexes, randomNumContext, userLostContext, scoreContext } from './context/context';
import Footer from './Footer';

function App() {

  const [mineCount, updateMineCount] = useState(1)
  const [playItAgain, updatePlayItAgain] = useState(false);
  const [tilesClickedIndexes, updateTilesClickedIndexes] = useState([])
  const [randomNumbers, updateRandomNumbers] = useState([]);
  const [userLost, updateUserLost] = useState(false)
  const [score, setScore] = useState(0)

  return (
    <>
      <minesCount.Provider value={{ mineCount, updateMineCount }}>
        <playAgain.Provider value={{ playItAgain, updatePlayItAgain }}>
          <tilesClickIndexes.Provider value={{ tilesClickedIndexes, updateTilesClickedIndexes }}>
            <randomNumContext.Provider value={{ randomNumbers, updateRandomNumbers }}>
              <userLostContext.Provider value={{ userLost, updateUserLost }}>
              <scoreContext.Provider value={{ score, setScore }}>

                <div className="min-w-full">
                  <SettingNavbar />
                  <div className='min-h-screen w-full flex justify-center items-center bg-slate-200'>
                    <Playsection />
                  </div>
                  <Footer />
                </div>

              </scoreContext.Provider>
              </userLostContext.Provider>
            </randomNumContext.Provider>
          </tilesClickIndexes.Provider>
        </playAgain.Provider>
      </minesCount.Provider>
    </>
  )
}

export default App
