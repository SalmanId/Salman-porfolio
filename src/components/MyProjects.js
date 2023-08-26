import H2 from "./H2";
import { projects } from "../Projects";
import Carousel from "./Carousel";

const MyProjects = () => {

  return (
    <>
      <div id="my-projects"></div>
      <section className="mt-10 p-10 text-gray-700 relative max-w-6xl m-auto">
        <H2>#### My Projects : </H2>
        <div className="mt-6 flex flex-wrap items-stretch justify-center gap-10">
          {projects.map((prj, id) => (
            <article key={id} className="shadow-2xl rounded">
              <Carousel prj={prj} />
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default MyProjects;


