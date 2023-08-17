import { useState, useEffect } from "react";
import { getPhotos } from "../CRUD/baseRequests";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { photoActions } from "../store/photos";
import { Photo, PhotoDataResponse } from "../models/models";
import { nextPageActions } from "../store/nextPage";
import { useMediaQuery } from "react-responsive";
import ImageList from "@mui/material/ImageList";
import SinglePhoto from "./SinglePhoto";
import { checkedPhotosActions } from "../store/checkedPhotos";

const PhotoGallery = () => {
  const dispatch = useAppDispatch();
  const [count, setCount] = useState<number>(1);
  const checkedPhotos = useAppSelector((state) => state.checkedPhotos);
  const nextPage = useAppSelector((state) => state.nextPage);
  const photoList = useAppSelector((state) => state.photos);

  useEffect(() => {
    getPhotos(count !== 1 ? nextPage : undefined).then(({ data }) => {
      const newPhotos: Photo[] = data.photos.map((photo: PhotoDataResponse) => {
        return {
          alt: photo.alt,
          id: photo.id,
          photographer: photo.photographer,
          avgColor: photo.avg_color,
          src: photo.src,
        };
      });
      const updatedPhotoList = [...photoList, ...newPhotos];
      dispatch(photoActions.updatePhotoList(updatedPhotoList));
      dispatch(nextPageActions.saveNextPageUrl(data.next_page));
    });
  }, [count]);

  const loadMoreHandler = () => {
    setCount(count + 1);
  };

  const handlePhotoCheckboxChange = (photoId: number, isChecked: boolean) => {
    if (isChecked) {
      dispatch(
        checkedPhotosActions.updatePhotoForChecked(
          checkedPhotos.filter((id) => id !== photoId)
        )
      );
    } else {
      dispatch(
        checkedPhotosActions.updatePhotoForChecked([...checkedPhotos, photoId])
      );
    }
  };

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  return (
    <div className="w-full max-w-6xl m-auto text-center">
      <ImageList
        sx={{ width: "90%", height: "100%", margin: "auto" }}
        cols={isDesktopOrLaptop ? 5 : 3}
        rowHeight={164}
      >
        {photoList.map((photo, i) => (
          <SinglePhoto
            photo={photo}
            key={photo.id + "" + i}
            onCheckboxChange={handlePhotoCheckboxChange}
            isChecked={checkedPhotos.includes(photo.id)}
          />
        ))}
      </ImageList>
      <button
        onClick={loadMoreHandler}
        className="bg-blue-700 hover:bg-blue-800 mx-auto my-4 text-white font-bold py-2 px-4 rounded"
      >
        Load more
      </button>
    </div>
  );
};

export default PhotoGallery;
