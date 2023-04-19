import React from "react";

const Home = () => {
  return (
    <>
      {/* component */}
      <div className="max-w-7xl mx-auto bg-gray-50 flex items-center">
        <section
          className="bg-cover bg-center px-4 py-32 w-full"
          style={{
            backgroundImage: 'url("https://source.unsplash.com/random")',
          }}
        >
          <div className="container mx-auto text-left text-white">
            <div className="flex items-center">
              <div className="w-1/2">
                <h1 className="text-5xl font-medium mb-6">
                  Welcome to My Login/Register form
                </h1>
                <p className="text-xl mb-12">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  viverra euismod odio, gravida pellentesque urna varius vitae.
                </p>
                <a
                  href="#"
                  className="bg-indigo-500 text-white py-4 px-12 rounded-full hover:bg-indigo-600"
                >
                  Demo
                </a>
              </div>
              <div className="w-1/2 pl-16">
                <img
                  src="https://source.unsplash.com/random?ux"
                  className="h-64 w-full object-cover rounded-xl"
                  alt="Layout Image"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;