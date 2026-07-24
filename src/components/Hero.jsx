function Hero() {
  return (
    <section className="bg-black h-screen flex items-center justify-center">

      <div className="text-center">

        <h3 className="text-white text-2xl mb-3">
          Hello, I'm
        </h3>

        <h1 className="text-7xl font-bold text-green-400">
          Umer Zaman
        </h1>

        <h2 className="text-3xl text-gray-300 mt-4">
          Frontend Developer
        </h2>

        <p className="text-gray-400 mt-6 max-w-xl">
          I create modern, responsive and beautiful websites
          using React and Tailwind CSS.
        </p>

        <div className="mt-8 flex justify-center gap-5">

          <button className="bg-green-400 text-black px-8 py-3 rounded-full font-bold hover:scale-105 duration-300">
            Hire Me
          </button>

          <button className="border border-green-400 text-green-400 px-8 py-3 rounded-full hover:bg-green-400 hover:text-black duration-300">
            Download CV
          </button>

        </div>

      </div>

    </section>
  );
}

export default Hero;