import DigitalClock from "./digital-clock";

export default function Home() {
  return (
    <div className="bg-gray-100 h-screen columns-3 gap-5 p-5">
      <div className="transition ease-in-out hover:scale-110 hover:bg-blue-500 hover:ring-blue-500 hover:shadow-xl group p-3 ring-1 ring-slate-200 bg-white shadow-lg rounded-lg my-10 py-8 px-5 font-sans font-medium text-4xl text-center hover:text-gray-100 text-gray-400">
        <DigitalClock />
      </div>
      <div className="transition ease-in-out hover:scale-110 hover:bg-blue-500 hover:ring-blue-500 hover:shadow-xl group p-3 ring-1 ring-slate-200 bg-white shadow-lg rounded-lg my-10 py-8 px-5 font-sans font-medium text-4xl text-center hover:text-gray-100 text-gray-400">
        <DigitalClock />
      </div>
      <div className="transition ease-in-out hover:scale-110 hover:bg-blue-500 hover:ring-blue-500 hover:shadow-xl group p-3 ring-1 ring-slate-200 bg-white shadow-lg rounded-lg my-10 py-8 px-5 font-sans font-medium text-4xl text-center hover:text-gray-100 text-gray-400">
        <DigitalClock />
      </div>
    </div>
  );
}
