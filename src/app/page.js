import Widget from "./components/widget";
import DigitalClock from "./components/digital-clock";

export default function Home() {
  return (
    <div className="grid bg-gray-100 place-items-center min-h-screen p-5">
      <div className="grid gap-5 max-w-5xl grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        <Widget>
          <h1 className="text-4xl font-extrabold">"Good morning"</h1>
        </Widget>
        <Widget className="bg-cover bg-right bg-[url('/Sunny.webp')] text-white text-right align-bottom">
          65F
        </Widget>
        <Widget>2</Widget>
        <Widget>3</Widget>
        <Widget>4</Widget>
        <Widget>5</Widget>
        <Widget className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white align-text-bottom">
          <DigitalClock />
        </Widget>
      </div>
    </div>
  );
}
