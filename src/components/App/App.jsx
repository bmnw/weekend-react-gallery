import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList.jsx';
import './App.css';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

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
          <Container maxWidth="sm">
            <Grid container spacing={2}>
            {
              <GalleryList 
                pictureList={pictureList}
                likePicture={likePicture}
              />
            }
            </Grid>
          </Container>
      </div>
    );
}

export default App;
