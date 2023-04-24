import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { createBrowserHistory } from "history";
import { appRepositoryAPI } from '../../api/index';
import { Loading } from '../../components'
import { OverViewCard } from './OverViewCard';

type Props = object

const getID = (pathString: string) => {
  return pathString.substring(pathString.lastIndexOf('/') + 1);
}

const DetailPage = (props: Props) => {
  const history = createBrowserHistory();
  const [movieDetail, setMovieDetail] = useState();
  const [isLoading, setLoading] = useState(true);


  const movieID = useMemo(() => {
    return getID(history.location.pathname)
  }, [history.location])

  const getDetailMovie = () => {
    appRepositoryAPI.getDetailMovie(movieID).then((res) => {
      if (res) {
        setMovieDetail(res.data);
        setLoading(false);
      }
    })
  }


  useEffect(() => {
    if (movieID) {
      getDetailMovie()
    }
  }, [movieID])

  const renderDetailContent = () => {
    return (
      <>
        <center>
          <span className='m-4'>
            Detail
          </span>
        </center>
        <OverViewCard movie={movieDetail} />
      </>
    )
  }

  return (
    isLoading ? <Loading /> :
      renderDetailContent()
  )
}

export { DetailPage }