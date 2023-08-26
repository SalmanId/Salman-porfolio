import Typewriter from "typewriter-effect";

const Intro = () => {
  return (
    <h1
      style={{ lineHeight: "1.4" }}
      className="pr-6 py-8 pl-12 text-2xl sm:text-6xl w-11/12"
    >
      Hey, I am a software engineer & mobile developer,
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("I create modern applications.")
            .pauseFor(500)
            
            .start();
        }}
      />
    </h1>
  );
};

export default Intro;
