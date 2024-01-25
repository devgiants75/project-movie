import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/main';
import Login from './pages/login';
import Signup from './pages/signup';
import MovieList from './pages/movieList';
import MovieDetail from './pages/movieDetail';
import SearchData from './pages/searchData';
import MyPage from './pages/myPage';
import Reviews from './pages/reviews';
import LikedMovies from './pages/likedMovies';

function App() {
  return (
    <Routes>
      <Route path="/main" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/movielist" element={<MovieList />} />
      <Route path="/moviedetail" element={<MovieDetail />} />
      <Route path="/searchdata" element={<SearchData />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/likedmovies" element={<LikedMovies />} />
      <Route path="/*" element={<Main />} />
    </Routes>
  );
}

export default App;
