import { Menu as AntDMenu } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import { HomeOutlined, UploadOutlined } from "@ant-design/icons";

const Menu = () => {
  const [currentlySelected, setCurrentlySelected] = useState("home");

  const handleMenuSelection = (e) => {
    setCurrentlySelected(e.key);
  };

  return (
    <AntDMenu
      mode="horizontal"
      onClick={handleMenuSelection}
      selectedKeys={[currentlySelected]}
    >
      <AntDMenu.Item key="home" icon={<HomeOutlined />}>
        <Link to="/">Home</Link>
      </AntDMenu.Item>
      <AntDMenu.Item key="upload" icon={<UploadOutlined />}>
        <Link to="/upload">Upload Video</Link>
      </AntDMenu.Item>
    </AntDMenu>
  );
};

export default Menu;
