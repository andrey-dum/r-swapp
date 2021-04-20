import Loader from './components/Loader/Loader';
import Character from './components/Character/Character';

import useCharacters from './hooks/useCharacters';
import './App.css';


function App() {
  const {characters, setCharacters, loading} = useCharacters()

  const changeItem = (ItemName, {setComment, text}) => {
    const updated =  characters.map(char => char.name === ItemName ? ({...char, comments: [...char.comments, {id: Date.now(), text: text} ]}) : char)
    setCharacters(updated)
    setComment('')
  }

  if(loading) {
    return <Loader />
  }

  return (
    <div className="app">
      <div className="items">
        { characters.map(char => (
          <Character
            key={char.name}
            char={char}
            changeItem={changeItem}
            />
        )) }
      </div>
    </div>
  );
}

export default App;
