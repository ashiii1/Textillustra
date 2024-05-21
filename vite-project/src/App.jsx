/*import { useEffect, useRef } from 'react'
import {Form} from 'react-bootstrap'

import './App.css'
import axios from 'axios'


const API_URL='https://api.unsplash.com/search/photos'
const IMAGE_PER_PAGE=20;

function App() {
  const searchInput=useRef(null)

 

    const fetchImages= async()=>{
      try{
        const result=  await axios.get(
        `${API_URL}?query=${
          searchInput.current.value
        }&page=1&per_page=${IMAGE_PER_PAGE}$client_id=${
          import.meta.env.VITE_API_KEY
        }`
        )
  
      console.log('result', result.data)
      } catch(error) {
        console.log(error)
      }

    }
  

  const handleSearch=(event)=>{
    event.preventDefault();
console.log(searchInput.current.value)
  }

  const handleSelection=(Selection)=>{
    searchInput.current.value=Selection
    fetchImages()
  }

  return (
    <div className='container'>
      <h1 className='title'>Image Search</h1>
      <div className='search-section'>
        <Form onSubmit={handleSearch}>
          <Form.Control type='search' placeholder='Search Anything...' className='search-input' ref={searchInput}/>

        </Form>
      </div>
      <div className='filters'>
        <div onClick={()=>handleSelection('Nature')}>Nature</div>
        <div onClick={()=>handleSelection('Birds')}>Birds</div>
        <div onClick={()=>handleSelection('Cats')}>Cats</div>
        <div onClick={()=>handleSelection('Rain')}>Rain</div>
        <div onClick={()=>handleSelection('Flags')}>Flags</div>

      </div>
      
    </div>
  )
}

export default App
*/
import { useCallback, useEffect, useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';

import './App.css';
import axios from 'axios';


const API_URL = 'https://api.unsplash.com/search/photos';
const IMAGE_PER_PAGE = 18;

function App() {

  const searchInput = useRef(null);
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  const fetchImages = useCallback(  async () => {
    try {
      const {data} = await axios.get(
        `${API_URL}?query=${searchInput.current.value}&page=${page}&per_page=${IMAGE_PER_PAGE}&client_id=${import.meta.env.VITE_API_KEY}`
      );

      setImages(data.results)
      setTotalPages(data.total_pages)

      setImages(result.data.results);
    } catch (error) {
      console.log(error);
    }
  },[page]);

  useEffect(()=>{
    fetchImages()
  
  },[fetchImages])
  

const resetSearch=()=>{
  setPage(1)
  fetchImages();
  
}


  const handleSearch = (event) => {
    event.preventDefault();
    console.log(searchInput.current.value);
  resetSearch()
  };

  const handleSelection = (selection) => {
    searchInput.current.value = selection;
   resetSearch()
  };

console.log('page' , page)



  return (


    <>
  

    <div className='container' >
      
      <h1 className='title' >Image Search</h1>
      <div className='search-section'>
        <Form onSubmit={handleSearch} >
          <Form.Control type='search' placeholder='Search Anything...' className='search-input' ref={searchInput} />
        </Form>
      </div>
      <div className='filters'>
        <div onClick={() => handleSelection('Nature')}>Nature</div>
        <div onClick={() => handleSelection('Birds')}>Birds</div>
        <div onClick={() => handleSelection('Cats')}>Cats</div>
        <div onClick={() => handleSelection('Rain')}>Rain</div>
        <div onClick={() => handleSelection('Flags')}>Flags</div>
      </div>
      <div className='images'>
        {images.map((image) => (
          <img key={image.id} src={image.urls.small} alt={image.alt_description} className='image'/>
        ))}
      </div>
      <div className='buttons'>
        { page > 1 &&  (
           <Button onClick={()=>setPage(page - 1)}>Previous</Button>)} 
           
        {page < totalPages && (
        <Button onClick={()=>setPage(page + 1)}>Next</Button>)} 
      </div>
    </div>
    </>
  );
        }

export default App;

/*
import { useCallback, useEffect, useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';

const API_URL = 'https://api.unsplash.com/search/photos';
const IMAGE_PER_PAGE = 20;

function App() {
  const searchInput = useRef(null);
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  const fetchImages = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `${API_URL}?query=${searchInput.current.value}&page=${page}&per_page=${IMAGE_PER_PAGE}&client_id=${import.meta.env.VITE_API_KEY}`
      );

      setImages(data.results);
      setTotalPages(data.total_pages);
    } catch (error) {
      console.log(error);
    }
  }, [page]);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  const resetSearch = () => {
    setPage(1);
    fetchImages();
  };

  const handleSearch = (event) => {
    event.preventDefault();
    resetSearch();
  };

  const handleSelection = (selection) => {
    searchInput.current.value = selection;
    resetSearch();
  };

  return (
    <div className='container'>
      <div className='video-container'>
        <video autoPlay loop muted>
          <source src='path/to/your/video.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>
      <h1 className='title'>Image Search</h1>
      <div className='search-section'>
        <Form onSubmit={handleSearch}>
          <Form.Control type='search' placeholder='Search Anything...' className='search-input' ref={searchInput} />
        </Form>
      </div>
      <div className='filters'>
        <div onClick={() => handleSelection('Nature')}>Nature</div>
        <div onClick={() => handleSelection('Birds')}>Birds</div>
        <div onClick={() => handleSelection('Cats')}>Cats</div>
        <div onClick={() => handleSelection('Rain')}>Rain</div>
        <div onClick={() => handleSelection('Flags')}>Flags</div>
      </div>
      <div className='images'>
        {images.map((image) => (
          <img key={image.id} src={image.urls.small} alt={image.alt_description} className='image' />
        ))}
      </div>
      <div className='buttons'>
        {page > 1 && <Button onClick={() => setPage(page - 1)}>Previous</Button>}
        {page < totalPages && <Button onClick={() => setPage(page + 1)}>Next</Button>}
      </div>
    </div>
  );
}

export default App;
*/