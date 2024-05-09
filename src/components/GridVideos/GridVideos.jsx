import React from "react";

import { VideoCard } from "../VideoCard";

export const GridVideos = ({ videos }) => {
  return (
    <div className="row g-4">
      {videos.map((item) => (
        <div className="col-sm-12 col-md-4 " key={item.id}>
          <VideoCard image={item.image} category={item.category} title={item.title} description={item.description} slug={item.slug} />
        </div>
      ))}
    </div>
  );
};
