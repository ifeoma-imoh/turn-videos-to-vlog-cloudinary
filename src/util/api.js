import axios from "axios";
import { cloudName, uploadPreset, uploadTag } from "./cloudinaryConfig";

export const getVideos = ({ successCallback }) => {
  axios
    .get(`https://res.cloudinary.com/${cloudName}/video/list/${uploadTag}.json`)
    .then((response) => successCallback(response.data.resources));
};

const formatMetadata = (metadata) => {
  return Object.entries(metadata).reduce(
    (result, [key, value]) =>
      `${result}${result !== "" ? "|" : ""}${key}=${value}`,
    ""
  );
};

export const uploadVideo = ({ file, metadata, successCallback }) => {
  const url = `https://api.cloudinary.com/v1_1/${cloudName}/video/upload`;
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", uploadPreset);
  data.append("context", formatMetadata(metadata));
  data.append("tags", uploadTag);
  axios
    .post(url, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => successCallback(response.data));
};
