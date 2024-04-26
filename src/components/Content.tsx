interface ContentProps {
  handleContextMenu: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export const Content = ({ handleContextMenu }: ContentProps) => {
  return (
    <div
      onContextMenu={e => handleContextMenu(e)}
      className="window-width mx-auto border border-black bg-[#ebebeb] h-[500px] flex items-center justify-center"
    >
      Context Area
    </div>
  );
};
