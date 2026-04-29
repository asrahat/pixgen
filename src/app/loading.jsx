import { Spinner } from "@heroui/react";
import React from "react";

const loading = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <Spinner size="xl" />
      <span className="text-xs text-muted">Cooking</span>
    </div>
  );
};

export default loading;
