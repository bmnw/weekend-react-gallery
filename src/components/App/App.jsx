import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx';
import GalleryList from '../GalleryList/GalleryList.jsx';
import GalleryForm from '../GalleryForm/GalleryForm.jsx';
import './App.css';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

function App() {

  const [pictureList, setPictureList] = useState([]);
  const [showForm, setShowForm] = useState(false);

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
            <Header 
              showForm={showForm}
              setShowForm={setShowForm}
            />
            {
              showForm ? (<GalleryForm 
                            fetchPictures={fetchPictures}
                          />
              ) : (
                  <span></span>
              )
            }
            <br />
            <Container maxWidth="md">
              <Grid container spacing={4}>
              {
                <GalleryList 
                  pictureList={pictureList}
                  likePicture={likePicture}
                  fetchPictures={fetchPictures}
                />
              }
              </Grid>
            </Container>
            <footer className="App-footer">
              <span>????? 2022</span>
            </footer>
      </div>
    );
}

export default App;
