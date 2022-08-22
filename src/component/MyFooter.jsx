import {
  FacebookOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from '@ant-design/icons';
import { Tag } from 'antd';
import React from 'react';

export const MyFooter = () => {
  return (
    <>
      <div className="footer">Mangas Argentina @Ivrea</div>

      <Tag icon={<TwitterOutlined />} color="#55acee">
        Twitter
      </Tag>
      <Tag icon={<YoutubeOutlined />} color="#cd201f">
        Youtube
      </Tag>
      <Tag icon={<FacebookOutlined />} color="#3b5999">
        Facebook
      </Tag>
      <Tag icon={<LinkedinOutlined />} color="#55acee">
        LinkedIn
      </Tag>
    </>
  );
};
