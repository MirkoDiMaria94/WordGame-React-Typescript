
import './App.css';
import Board from './components/Board';
import { SelectBoard } from './store/board/board.selector';
import { useSelector } from 'react-redux';
import { MdRefresh } from 'react-icons/md';


function App() {

  function refreshPage() {
    window.location.reload();
  }

  const board = useSelector(SelectBoard);
  return (
   

    <div className="App">
      <div className='head'>
      <h1>WORD GAME</h1>
      <span className='refreshButton' onClick={refreshPage}> <MdRefresh/></span>
      </div>
     
   
    <div className="board-container">
      <Board board={board}/>
    </div>
    </div>
    
  );
}

export default App;
 