import { useAddPhotoMutation, useFetchPhotosQuery } from "../store";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import PhotosListItem from "./PhotosListItem";
import Skeleton from "./Skeleton";

function PhotosList({album}) {
     const {data, isFetching, error} = useFetchPhotosQuery(album);
     const [addPhoto, addPhotoResults] = useAddPhotoMutation();

     const handleAddPhoto = () => {
        addPhoto(album);
     };

     let content;

     if (isFetching) {
        content = <Skeleton times={3} className="h-10 w-full" />;
      } else if (error) {
        content = <div>Error loading albums</div>;
      } else {
        content = data.map((photo) => {
          return <PhotosListItem key={photo.id} photo={photo} />
        });
      }

    return <div>
        <div className="m-2 flex flex-row items-center justify-between">
            <h3 className="text-lg font-bold">Photos In {album.title}</h3>
            <Button onClick={handleAddPhoto} loading={addPhotoResults.isLoading}>+ Add Photo</Button>
        </div>
        <div className="mx-8 flex flex-row flex-wrap justify-center">{content}</div>
    </div>

}

export default PhotosList;