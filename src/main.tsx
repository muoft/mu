import './assets/css/bootstrap.min.css';
import './assets/css/LineIcons.3.0.css';
import './assets/css/animate.css';
import './assets/css/tiny-slider.css';
import './assets/css/glightbox.min.css';
import './assets/css/main.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/index';
import AboutUs from './pages/about/about-us';
import Execs from './pages/about/execs';
import FAQs from './pages/FAQs';
import Events from './pages/events/index';
import EventDetailPage from './pages/events/[title]';
import Repo from './pages/repo/index';
import RepoUpload from './pages/repo/upload';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/about-us" element={<AboutUs />} />
        <Route path="/about/execs" element={<Execs />} />
        <Route path="/FAQs" element={<FAQs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:title" element={<EventDetailPage />} />
        <Route path="/repo" element={<Repo />} />
        <Route path="/repo/upload" element={<RepoUpload />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
