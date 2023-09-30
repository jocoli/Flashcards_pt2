import { useState } from 'react'
import './App.css'
import Card from './components/Card';

function App() {
  return(
     
    <div className="App">

      {/*Title, description, and number of cards*/}
      <h1>Animal Quiz!</h1>
      <h4>Read questions about animals and answer correctly!</h4>
      <h5>Number of cards: 10</h5>

      {/* Card */}
      
      <Card />

    </div>


  )

  

}
  

export default App
