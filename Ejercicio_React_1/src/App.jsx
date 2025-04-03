import { useEffect, useState } from 'react';

import Header from "./Components/Header/Header";
import CardTest from "./Components/CardTest/CardTest";
import Pagination from '@mui/material/Pagination';

import "./App.css"

const App = () => {

  const [arrayObjects, setArrayObjects] = useState([])
  const [totalPages, setTotalPages] = useState(1)

  useEffect(()=>{
    fetch('https://rickandmortyapi.com/api/character')
  .then(response => response.json())
  .then(data => {
    setArrayObjects(data.results)
    setTotalPages(data.info.pages)
  })
  },[])

  const handlePagination=(event, page)=>{
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
  .then(response => response.json())
  .then(data => setArrayObjects(data.results))
  }

return (
  <>
      <Header/>
      <main>
        {arrayObjects.map((item)=>{
          return (
            <CardTest genero={item.gender} name={item.name} especies={item.species} img={item.image} />
          )
        })}      

      </main>
      <div id="pagination">
        <Pagination onChange={handlePagination} count={totalPages} variant="outlined" shape="rounded" />      
      </div>
    </>
  )
}

export default App



// const arrayObjects = [
//   {img:"https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/e40b6ea6361a1abe28f32e7910f63b66/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"},
//   {img:"https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/e40b6ea6361a1abe28f32e7910f63b66/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"},
//   {img:"https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/e40b6ea6361a1abe28f32e7910f63b66/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"},
//   {img:"https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/e40b6ea6361a1abe28f32e7910f63b66/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"},
//   {img:"https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/e40b6ea6361a1abe28f32e7910f63b66/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"},
//   {img:"https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/e40b6ea6361a1abe28f32e7910f63b66/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"},
//   {img:"https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/e40b6ea6361a1abe28f32e7910f63b66/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"},
//   {img:"https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/e40b6ea6361a1abe28f32e7910f63b66/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"},
//   {img:"https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/e40b6ea6361a1abe28f32e7910f63b66/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"},
// ]