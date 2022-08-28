import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [pictureList, setPictureList] = useState([]);
  const [pictureLikes, setPictureLikes] = useState(0);

  useEffect(() => {
    console.log('useEffect - page load');
    fetchPictures();
  });

    const fetchPictures = () => {
      axios({
        method: 'GET',
        url: '/gallery'
      }).then(response => {
        setPictureList(response.data);
      }).catch(error => {
        console.log(error);
        alert('Something went wrong in GET /gallery');
      });
    } // end fetchPictures

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
      
        {
        pictureList.map((picture) => {
          return <div key={picture.id}>
                  <img id="image" 
                  src={picture.path} 
                  alt={picture.description} />
                  {picture.likes} people like this picture!
                </div>
        })
        }

      </div>
    );
}

export default App;
