const CardStatus = (props) => {
  return (
    <div className="flex w-[350px] h-[100px] border rounded-lg shadow-md bg-white">
      <div
        className={` flex justify-center items-center h-[100px] w-[100px] ${props.style} `}
      >
        <div className="text-white text-6xl">{props.icon}</div>
      </div>
      <div className="flex flex-col  items-start px-4 py-2">
        <p className={`text-xl font-semibold ${props.text}`}>{props.status}</p>
        <p className="text-2xl font-bold ">{props.value}</p>
      </div>
    </div>
  );
};

export default CardStatus;
