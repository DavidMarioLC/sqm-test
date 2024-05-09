import React from "react";
import { ApplicationCard } from "@/components/ApplicationCard";
export const GridApplications = ({ applications }) => {
  return applications.map((item) => (
    <div className="col-12 col-lg-4" key={item.id}>
      <ApplicationCard
        image={item.image}
        icon={item.icon}
        title={item.name}
        link={item.link.url}
      />
    </div>
  ));
};
