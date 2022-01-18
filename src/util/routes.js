import VideoGrid from "../components/VideoGrid";
import VideoUpload from "../components/VideoUpload";

export default [
  {
    path: "/",
    element: <VideoGrid />,
  },
  {
    path: "/upload",
    element: <VideoUpload />,
  },
];
