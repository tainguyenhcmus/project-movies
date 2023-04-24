import React, { useEffect, useState, useMemo } from 'react'
import { LayoutBody, MovieBlock, Loading, InfiniteScroll } from '../components'
import { appRepositoryAPI } from '../api';
import './style.css';

const withPageHOC = (apiFunction: any) => {
  return () => {
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const [movies, setMovies] = useState<any[]>([])
    const [isGridView, setGridView] = useState(true);

    useEffect(() => {
      fetchList(page);
    }, [page])

    const fetchList = async (page: number) => {
      apiFunction(page).then((res: any) => {
        if (res) {
          setMovies([...movies, ...res.data.results]);
          setTotalPage(res.data.total_pages);
        }
      })
    }

    const renderListView = () => {
      return <div className="list-movie--container--list-view">
        {movies.map((movie, index) => (
          <MovieBlock isGridView={isGridView} key={movie.id + index} movie={movie} />
        ))}
      </div>
    }

    const renderMovieList = useMemo(() => {

      return isGridView ? renderListView() : <div className="list-movie--container" >
        {
          movies.map((movie, index) => (
            <MovieBlock isGridView={isGridView} key={movie.id + index} movie={movie} />
          ))
        }
      </div>
    }, [movies, isGridView]);

    const renderInfiniteMovieList = () => {
      return <InfiniteScroll
        loader={<Loading />}
        className="w-[800px] mx-auto my-10"
        fetchMore={() => setPage((prev) => prev + 1)}
        hasMore={movies.length < totalPage / 20}
        endMessage={<p>You have seen it all</p>}
      >
        {renderMovieList}
      </InfiniteScroll>
    }

    return (
      <LayoutBody size="lg" flexRow>
        <center>HomePage</center>
        <div className="form-check form-switch">
          <input onChange={e => {
            setGridView(e.target.checked)
          }} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked={isGridView} />
          <label className="form-check-label" htmlFor="flexSwitchCheckChecked">{`Switch to ${isGridView ? 'grid' : 'list'} view`}</label>
        </div>
        {movies && movies.length > 0 ? renderInfiniteMovieList() : <span>No movies</span>}
      </LayoutBody>
    )
  }
};

export { withPageHOC };