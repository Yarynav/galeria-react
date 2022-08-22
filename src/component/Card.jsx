import { Card, Tag } from 'antd';
import React from 'react';
const { Meta } = Card;

export const CardImagen = ({ src, alt, title, description, tomo }) => (
  <Card className="img" hoverable cover={<img alt={alt} src={src} />}>
    <Meta title={title} description={description} />
    <div className="box-tomo">
      <Tag className="tomo" color="magenta">
        {tomo}
      </Tag>
    </div>
  </Card>
);
