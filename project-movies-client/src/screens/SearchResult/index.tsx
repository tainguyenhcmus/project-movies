import React, { useEffect, useState, useMemo } from 'react'
import { useApp } from "../../contexts/app";
import { appRepositoryAPI } from '../../api/index';
import { LayoutBody, MovieBlock, Loading, InfiniteScroll } from '../../components'

type Props = object

const SearchResult = (props: Props) => {
  const appContext = useApp();
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [searchResults, setSearchResults] = useState<any[]>([])

  useEffect(() => {
    appContext.toSearch === true && fetchList(page, appContext.searchGlobalInput);
  }, [page, appContext.searchGlobalInput, appContext.toSearch])

  const fetchList = async (page: number, query: string) => {
    appRepositoryAPI.searchMovies(page, query).then((res) => {
      if (res) {
        setSearchResults(res.data.results);
        setTotalPage(res.data.total_pages);
        appContext.triggerSearch(false);
      }
    })
  }

  const renderMovieList = useMemo(() => {
    return <div className="list-movie--container">
      {searchResults.map((movie, index) => (
        <MovieBlock key={movie.id + index} movie={movie} />
      ))}
    </div>
  }, [searchResults]);

  const renderInfiniteMovieList = () => {
    return <InfiniteScroll
      loader={<Loading />}
      className="w-[800px] mx-auto my-10"
      fetchMore={() => setPage((prev) => prev + 1)}
      hasMore={searchResults.length < totalPage / 20}
      endMessage={<p>You have seen it all</p>}
    >
      {renderMovieList}
    </InfiniteScroll>
  }

  return (
    <LayoutBody size="lg" flexRow>
      <center>Search Result</center>
      {searchResults && searchResults.length > 0 ? renderInfiniteMovieList() : <span>No movies</span>}
    </LayoutBody>
  )
}

export { SearchResult }