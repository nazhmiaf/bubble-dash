const ButtonComponent = ({ onClick, handleClick, icon, label }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg transition-all duration-150 ease-in-out text-left hover:shadow-sm hover:scale-[1.02] ${handleClick}`}
    >
      <span className="text-xl">{icon}</span>
      <span className="font-medium text-md">{label}</span>
    </button>
  );
};

export default ButtonComponent;
