import { withPageHOC } from '../../PageHOC';
import { appRepositoryAPI } from '../../api/index';

const MainPage = withPageHOC(appRepositoryAPI.getListPopularMovies)

export { MainPage }