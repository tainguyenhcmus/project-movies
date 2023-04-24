import React from 'react'
import { Routes, Route } from "react-router-dom";
import {
  MainPage,
  DetailPage,
  SearchResult,
  NotFound,
  TopRated,
  NowPlaying
} from './screens';
import { CONSTANT_LINKS } from "./models/links";
import { Body } from './components'

const App = () => {
  return (
    <div className='bg-dark'>
      <Body>
        <Routes>
          <Route path={CONSTANT_LINKS.route_main} Component={MainPage} />
          <Route path={CONSTANT_LINKS.route_movies_detail} Component={DetailPage} />
          <Route path={CONSTANT_LINKS.route_search_result} Component={SearchResult} />
          <Route path={CONSTANT_LINKS.route_top_rated} Component={TopRated} />
          <Route path={CONSTANT_LINKS.route_now_playing} Component={NowPlaying} />
          <Route path="*" Component={NotFound} />
        </Routes>
      </Body>
    </div>
  )
}

export default App