import React, { useState, useEffect } from "react";
import { Alert } from "antd";

const Offline = () => {
  const [isOnline, setOnline] = useState(true);

  useEffect(() => {
    setOnline(navigator.onLine);
  }, []);

  window.addEventListener("online", () => {
    setOnline(true);
  });
  window.addEventListener("offline", () => {
    setOnline(false);
  });
  if (isOnline) {
    return null;
  }
  return (
    <Alert
      message="Заплати за инет"
      type="warning"
    />
  );
};

export default Offline;