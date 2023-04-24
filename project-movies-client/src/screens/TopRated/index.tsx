import { withPageHOC } from '../../PageHOC';
import { appRepositoryAPI } from '../../api/index';

const TopRated = withPageHOC(appRepositoryAPI.getListTopRatedMovies)

export { TopRated }