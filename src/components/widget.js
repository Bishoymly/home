"use client";
const Widget = ({ key, style, className, children }) => {
  return (
    <div
      key={key}
      className={`absolute left-0 top-0 transition ease-in-out hover:scale-105 hover:bg-blue-500 hover:shadow-xl group p-3 ring-1 ring-slate-200 bg-white shadow-lg rounded-lg font-sans font-medium text-4xl text-center hover:text-gray-100 ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default Widget;
