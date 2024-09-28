import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import {Container} from 'react-bootstrap'
import NavBar from './Components/VavBar'
import Header from './Components/Header'
import Categ from './Components/Categ'
import Cards from './Components/Cards'
import items from './data'
import { useState } from 'react';

function App() {

  const [itemData, setItemData] = useState(items);

  const allCategory = ["All",...new Set(items.map(i=>i.category))];

  const filterByCategory=(cat) =>{ 
    if (cat === 'All') {
      setItemData(items);
    } else {
      const newArr = items.filter(filteredCate => filteredCate.category === cat)
      setItemData(newArr);
    }
  }

  const filterSearch=(word) =>{ 
    if (word !== '') {
      const newArr = items.filter(filteredCate => filteredCate.title === word)
      setItemData(newArr);
    }
  }


  return (
    <div className="color-body font">
        <NavBar filterSearch={filterSearch}/>
      <Container>
        <Header />
        <Categ filterByCategory={filterByCategory} allCategory={allCategory}/>
        <Cards itemData={itemData} />
      </Container>
      
    </div>
  );
}

export default App;
