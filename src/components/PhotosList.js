import { useFetchPhotosQuery } from '../store';
// import PhotosListItem from './PhotosListItem';

function PhotosList({ album }) {
  useFetchPhotosQuery(album);

  return <div>PhotosList</div>;
}

export default PhotosList;
