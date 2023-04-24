import { withPageHOC } from '../../PageHOC';
import { appRepositoryAPI } from '../../api/index';

const NowPlaying = withPageHOC(appRepositoryAPI.getListNowPlayingMovies)

export { NowPlaying }