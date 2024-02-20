import { useState } from "react";
import "./index.css";
const tabContent = [
  {
    title: "Tab 1",
    content: "Content for Tab 1",
  },
  {
    title: "Tab 2",
    content: "Content for Tab 2",
  },
  {
    title: "Tab 3",
    content: "Content for Tab 3",
  },
];
const Tabs = () => {
  const [index, setIndex] = useState(0);
  const { content } = tabContent[index];

  const changeTabHandler = (ind) => {
    setIndex(ind);
  };
  return (
    <div>
      <ul>
        <li>
          <button
            className={index === 0 ? "active" : "in-active"}
            onClick={() => changeTabHandler(0)}
          >
            Tab 1
          </button>
          <button
            className={index === 1 ? "active" : "in-active"}
            onClick={() => changeTabHandler(1)}
          >
            Tab 2
          </button>
          <button
            className={index === 2 ? "active" : "in-active"}
            onClick={() => changeTabHandler(2)}
          >
            Tab 3
          </button>
        </li>
      </ul>
      <p>{content}</p>
    </div>
  );
};

export default Tabs;
