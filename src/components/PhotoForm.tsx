import React, { useState } from "react";
import { Photo } from "../models/models";
import { photoActions } from "../store/photos";
import { useAppDispatch, useAppSelector } from "../store/hook";

const PhotoForm = () => {
  const initialState = {
    alt: "",
    id: 0,
    photographer: "",
    avgColor: "",
    src: {
      original: "",
      large2x: "",
      large: "",
      medium: "",
      small: "",
      portrait: "",
      landscape: "",
      tiny: "",
    },
  };
  const dispatch = useAppDispatch();
  const photos = useAppSelector((state) => state.photos);

  const [photoData, setPhotoData] = useState<Photo>(initialState);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const currentDateInMilliseconds: number = new Date().getTime();
    setPhotoData({ ...photoData, id: currentDateInMilliseconds });
    dispatch(photoActions.updatePhotoList([photoData, ...photos]));
    setPhotoData(initialState);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 mx-auto w-11/12">
      <div className="relative z-0 w-full mb-6 group">
        <label
          htmlFor="alt"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Title
        </label>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="text"
          id="alt"
          name="alt"
          value={photoData.alt}
          onChange={(e) => setPhotoData({ ...photoData, alt: e.target.value })}
        />
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <label
          htmlFor="url"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          url*
        </label>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="text"
          id="url"
          name="url"
          required
          value={photoData.src.original}
          onChange={(e) =>
            setPhotoData({
              ...photoData,
              src: {
                original: e.target.value,
                large2x: "",
                large: "",
                medium: "",
                small: "",
                portrait: "",
                landscape: "",
                tiny: "",
              },
            })
          }
        />
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <label
          htmlFor="photographer"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Photographer
        </label>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="text"
          id="photographer"
          name="photographer"
          value={photoData.photographer}
          onChange={(e) =>
            setPhotoData({ ...photoData, photographer: e.target.value })
          }
        />
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <label
          htmlFor="avgColor"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Average Color
        </label>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="text"
          id="avgColor"
          name="avgColor"
          value={photoData.avgColor}
          onChange={(e) =>
            setPhotoData({ ...photoData, avgColor: e.target.value })
          }
        />{" "}
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
};

export default PhotoForm;
