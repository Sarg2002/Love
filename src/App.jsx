import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";

function App() {
  return (
    <div className="realative top-0 bottom-0 z-[-2] min-h-screen w-full bg-gradient-to-r from-[#464655] to-[#5C576B]">
      <section className="py-10  w-full h-full mx-auto container lg:max-w-4xl md:max-w-2xl">
        <Section1 />
        <Section2 />
        <Section3 />
      </section>
    </div>
  );
}

export default App;
