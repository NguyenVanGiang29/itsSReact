import './App.css';
import customHooks from './hooks/customHooks';

function App() {

  const [index, nextPage, backPage] = customHooks(); 
  
  const student = [
    { id: 1, name: 'Dang' },

    { id: 2, name: 'Zang' },

    { id: 3, name: 'Yang' },

    { id: 4, name: 'Giang' },
];


  return (
    <div className="App">
      <h4>学生一覧: [Dang, Zang, Yang, Giang]</h4>
      <h4>位置: {student[index].id}</h4>
      <h4>名前: {student[index].name}</h4>
      <button
        onClick={nextPage}
      >
        次に
      </button>
      <button
        style={{marginLeft: 20}}
        onClick={backPage}
      >
        前に
      </button>
    </div>
  );
}

export default App;
