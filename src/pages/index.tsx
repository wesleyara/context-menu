import { useState } from "react";
import { Content } from "~/components/Content";
import { ContextMenu } from "~/components/ContextMenu";

const initialState = {
  x: 0,
  y: 0,
  show: false,
};

export default function Home() {
  const [state, setState] = useState(initialState);

  const handleContextMenu = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    e.preventDefault();
    setState({
      x: e.pageX,
      y: e.pageY,
      show: true,
    });
  };

  const handleCloseContextMenu = () => setState(initialState);

  return (
    <main className="w-[100vw] h-[100vh] flex items-center justify-center">
      <Content handleContextMenu={handleContextMenu} />

      {state.show && (
        <ContextMenu
          handleCloseContextMenu={handleCloseContextMenu}
          x={state.x}
          y={state.y}
        />
      )}
    </main>
  );
}
