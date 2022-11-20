import { useState } from 'react';
import './App.css';

function App() {
  const [list, setList] = useState([])
  const [text, setText] = useState('')
  const[editMode, setEditMode] = useState(false)
  const[editIndex, setEditIndex] = useState()

  const addItem = () => {
    if (!text) {
      alert('Enter text please');
      return;
    }


    const tempList = [...list];
    tempList.push(text);
    setList(tempList);
     resetState()
  }


  const deleteItem = (index) => {
    const tempList = [...list]
    tempList.splice(index, 1)
    setList(tempList)

    resetState()
  }

  const editItem = (index) => {
    setText(list[index])
    setEditMode(true)
    setEditIndex(index)
  }

  const updateItem = () => {

    const tempList = [...list]
    tempList[editIndex] = text
    setList(tempList)

    setEditMode(false)
    resetState()
  }

  const resetState = () => {
    setText('')
    setEditMode(false)
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1 className='main-heading'>React Crud App</h1>

        <input className='input'
        placeholder='Enter item name...'
        onChange={e => setText(e.target.value)}
        value={text}
        />

        {editMode ?
        <button className='bttn' onClick={updateItem}>Update</button>
        :
        <button className='bttn' onClick={addItem}>Add</button>
        }


        <ul>
          
            {list.map((item, index) => {
              return <li>{item}
              <button className='btnn' onClick={() => deleteItem(index) }>Delete</button>
              <button className='btnn' onClick={() => editItem(index)}>Edit</button>
              </li>
            })}
          
        </ul>
        
         <br/>
      </header>
    </div>
  );
}

export default App;
