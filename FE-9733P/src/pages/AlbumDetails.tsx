import { useLoaderData, useParams } from "react-router-dom";
import { useStore } from "../store/store";

interface PhotoParams {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export const albumLoader = async ({ params }: any) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/albums/${params.albumId}/photos`
  );
  const photos = await response.json();
  return photos;
};

function AlbumDetails() {
  const photos = useLoaderData() as PhotoParams[];
  const { addFavorite, removeFavorite, favorites } = useStore();
  const { userId } = useParams();

  const handleFavoriteClick = (photo) => {
    if (favorites?.some((fav) => (fav.id === photo.id))) {
      removeFavorite(photo.id);
    } else {
      addFavorite({ ...photo, userId: Number(userId) });
    }
  };

  return (
    <>
      <div>
        <h2>Photos</h2>
        <ul>
          {photos?.map((photo) => (
            <li key={photo.id}>
              <img src={photo.thumbnailUrl} alt={photo.title} />
              <p>{photo.title}</p>
              <button onClick={() => handleFavoriteClick(photo)}>
                {favorites?.some((fav) => fav.id === photo.id)
                  ? "Unfavorite"
                  : "Favorite"}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default AlbumDetails;

