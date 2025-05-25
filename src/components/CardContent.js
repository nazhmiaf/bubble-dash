const CardContent = (props) => {
  return (
    <div>
      <div
        className={`w-[350px] h-[200px] p-5 rounded-lg shadow-lg ${props.Style} `}
      >
        <div className="h-full">
          <p className="text-2xl ">{props.name}</p>
          <div className="flex justify-between items-center pt-[64px] px-4  ">
            <div className="text-4xl -translate-y-1 -translate-x-4">{props.Icon}</div>
            <p className="text-3xl font-semibold">{props.value}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContent;
