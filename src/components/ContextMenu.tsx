import { useRef } from "react";
import { FaGithub } from "react-icons/fa6";
import { GoInfo } from "react-icons/go";
import { LuShare2 } from "react-icons/lu";
import { useOnClickOutside } from "~/hooks/useOnClickOutside";

interface ContextMenuProps {
  handleCloseContextMenu: () => void;
  x: number;
  y: number;
}

export const ContextMenu = ({
  handleCloseContextMenu,
  x,
  y,
}: ContextMenuProps) => {
  const ref = useRef(null);
  useOnClickOutside(ref, () => handleCloseContextMenu());

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Context Menu",
        text: "Check out this context menu!",
        url: location.href,
      });
    } else {
      navigator.clipboard.writeText(location.href);
      alert("Link copied to clipboard!");
    }
  };

  const handleClick = (type: "code" | "share" | "about") => {
    switch (type) {
      case "code":
        open("https://github.com/wesleyara/context-menu");
        break;
      case "share":
        handleShare();
        break;
      case "about":
        open("https://wesleyaraujo.dev/");
        break;
      default:
        break;
    }

    handleCloseContextMenu();
  };

  const findCorrectXPosition = () => {
    const componentWidth = 200;

    if (x + componentWidth > window.innerWidth) {
      return x - componentWidth;
    }

    return x;
  }

  const findCorrectYPosition = () => {
    const componentHeight = 130;

    if (y + componentHeight > window.innerHeight) {
      return y - componentHeight;
    }

    return y;
  };


  return (
    <div
      ref={ref}
      style={{ top: `${findCorrectYPosition()}px`, left: `${findCorrectXPosition()}px` }}
      className="absolute z-10 w-[200px] bg-white border border-gray-300 shadow-lg rounded-md overflow-hidden"
    >
      <ul className="flex flex-col items-start">
        <li
          onClick={() => handleClick("code")}
          className="py-2 px-4 cursor-pointer w-full flex items-center justify-start gap-2 hover:bg-gray-100"
        >
          <FaGithub />
          Code
        </li>
        <li
          onClick={() => handleClick("share")}
          className="py-2 px-4 cursor-pointer w-full flex items-center justify-start gap-2 hover:bg-gray-100"
        >
          <LuShare2 />
          Share
        </li>
        <li
          onClick={() => handleClick("about")}
          className="py-2 px-4 cursor-pointer w-full flex items-center justify-start gap-2 hover:bg-gray-100"
        >
          <GoInfo />
          About
        </li>
      </ul>
    </div>
  );
};
