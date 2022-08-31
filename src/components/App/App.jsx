import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList.jsx';
import './App.css';

function App() {

  const [pictureList, setPictureList] = useState([]);

  useEffect(() => {
    // console.log('useEffect - page load');
    fetchPictures();
  }, []);

    const fetchPictures = () => {
      axios({
        method: 'GET',
        url: '/gallery'
      }).then(response => {
        console.log(typeof response);
        setPictureList(response.data);
      }).catch(error => {
        console.log(error);
        alert('Something went wrong in GET /gallery');
      });
    } // end fetchPictures

    // const likeSubmit = (inputID) => {
    //   console.log('in likeSubmit, inputID', inputID);
    //   // console.log(typeof inputID);
    //   setLikedPictureID(inputID);
    //   console.log('likedPictureID', likedPictureID);
    //   // likePicture(likedPictureID);
    // } // end likeSubmit

    const likePicture = (input) => {
      // event.preventDefault();
      console.log('in likePicture', input);
      axios({
        method: 'PUT',
        url: `/gallery/like/${input}`
      }).then(response => {
        fetchPictures();
      }).catch(error => {
        console.log(error);
        alert('Something went wrong in POST /gallery');
      });
    } // end likePicture

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        {
          <GalleryList 
            pictureList={pictureList}
            likePicture={likePicture}
          />
        }
      
      </div>
    );
}

export default App;
