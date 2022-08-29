import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [pictureList, setPictureList] = useState([]);
  const [likedPictureID, setLikedPictureID] = useState('');

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
        pictureList.map(picture => {
          return <div key={picture.id}>
                  <img id="image" 
                  src={picture.path} 
                  alt={picture.description} />
                  <button value={picture.id} id="like-submit" onClick={(event) => likePicture(event.target.value)}>👍</button> 
                  {picture.likes} people like this picture!
                </div>
        })
        }
      
      </div>
    );
}

export default App;
