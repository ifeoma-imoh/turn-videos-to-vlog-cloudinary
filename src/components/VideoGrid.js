import React, { useEffect, useState } from "react";
import { getVideos } from "../util/api";
import { Card, Col, Row } from "antd";
import { Video } from "cloudinary-react";
import { cloudName } from "../util/cloudinaryConfig";

const VideoGrid = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos({
      successCallback: setVideos,
    });
  }, []);

  return (
    <>
      <h1>Cloudinary Powered Vlog</h1>
      <Row gutter={[16, 16]} justify="center" align="middle">
        {videos.map((video) => {
          const { title, description } = video.context.custom;
          const { public_id: publicId } = video;
          return (
            <Col key={publicId}>
              <Card
                style={{ width: "600px" }}
                cover={
                  <Video
                    cloudName={cloudName}
                    publicId={publicId}
                    controls={true}
                    width="480"
                  />
                }
              >
                <Card.Meta title={title} description={description} />
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default VideoGrid;
