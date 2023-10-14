import Widget from "./components/widget";
import DigitalClock from "./components/digital-clock";

export default function Home() {
  return (
    <div className="grid bg-gray-100 place-items-center min-h-screen p-5">
      <div className="grid gap-5 max-w-5xl grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        <Widget>
          <h1 class="text-4xl font-extrabold">Home</h1>
        </Widget>
        <Widget>1</Widget>
        <Widget>2</Widget>
        <Widget>3</Widget>
        <Widget>4</Widget>
        <Widget>5</Widget>
        <Widget>6</Widget>
        <Widget>
          <DigitalClock />
        </Widget>
      </div>
    </div>
  );
}
