import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import Youtube from './service/youtube';
import axios from 'axios';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter } from 'react-router-dom';

// js fetch : key값 전달
// const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_API_KEY);

const httpClient = axios.create({
  baseURL: 'https://youtube.googleapis.com/youtube/v3',
  params: { key: process.env.REACT_APP_YOUTUBE_API_KEY }
});

const youtube = new Youtube(httpClient);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App youtube={youtube} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);