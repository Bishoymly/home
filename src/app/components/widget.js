const Widget = ({ className, children }) => {
  return (
    <div
      className={`${className} aspect-square transition ease-in-out hover:col-span-2 hover:row-span-2 hover:scale-105 hover:bg-blue-500 hover:shadow-xl group p-3 ring-1 ring-slate-200 bg-white shadow-lg rounded-lg font-sans font-medium text-4xl text-center hover:text-gray-100`}
    >
      {children}
    </div>
  );
};

export default Widget;
