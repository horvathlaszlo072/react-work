import React, { useState, useEffect } from "react";

const Text = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("COMPONENT MOUNTED");

    return () => {
      console.log("Component Unmounted");
    };
  }, []);

  return (
    <div>
      <input
        onChange={(event) => {
          setText(event.target.value);
        }}
      />
      <h1>{text}</h1>
    </div>
  );
};

export default Text;
