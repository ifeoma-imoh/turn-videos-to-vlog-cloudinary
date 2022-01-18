import { useState } from "react";
import { Button, Card, Col, Form, Input, message, Upload } from "antd";
import { uploadVideo } from "../util/api";
import { UploadOutlined } from "@ant-design/icons";
import { Navigate } from "react-router-dom";

const VideoUpload = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [shouldRedirect, setShouldRedirect] = useState(false);

  const formItemLayout = {
    labelCol: {
      sm: { span: 4 },
    },
    wrapperCol: {
      sm: { span: 18 },
    },
  };

  const onFinish = (values) => {
    if (uploadedFile === null) {
      message.error("You need to upload a video first");
    } else {
      setIsUploading(true);
      uploadVideo({
        file: uploadedFile,
        metadata: values,
        successCallback: () => {
          setIsUploading(false);
          setShouldRedirect(true);
        },
      });
    }
  };

  const onFailedSubmission = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const props = {
    name: "file",
    onRemove: () => {
      setUploadedFile(null);
    },
    beforeUpload: (file) => {
      setUploadedFile(file);
      return false;
    },
    showUploadList: false,
    maxCount: 1,
  };

  return shouldRedirect ? (
    <Navigate to="/" />
  ) : (
    <Card style={{ margin: "auto", width: "50%" }}>
      <Form
        {...formItemLayout}
        onFinish={onFinish}
        onFinishFailed={onFailedSubmission}
        autoComplete="off"
      >
        <Form.Item
          label="Title"
          name="title"
          rules={[
            {
              required: true,
              message: "Please provide a title for the video",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          rules={[
            {
              required: true,
              message: "Please provide a brief summary of the video",
            },
          ]}
        >
          <Input.TextArea showCount maxLength={1000} />
        </Form.Item>
        <Col span={8} offset={9} style={{ marginBottom: "10px" }}>
          <Upload {...props}>
            <Button icon={<UploadOutlined />} loading={isUploading}>
              Click to Upload Video
            </Button>
          </Upload>
        </Col>
        <Form.Item wrapperCol={{ offset: 5, span: 16 }}>
          <Button type="primary" htmlType="submit" loading={isUploading}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default VideoUpload;
