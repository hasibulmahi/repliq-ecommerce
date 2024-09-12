import React from 'react';

function Intro() {
    return (
        <section className="py-16  ">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden px-6 lg:px-8">
            <div className="mx-auto max-w-2xl pt-16 sm:pt-20 lg:pt-24">
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                  What is Happy Jolly?
                </h1>
                <p className="mt-8 text-lg leading-6 text-yellow-500">
                  Rediscovering Joy and Playfulness through Blockchain
                  Collectibles.
                </p>
                <div className="relative pt-12 text-lg leading-8 text-gray-400">
                  <p>
                    Happy Jolly is a playful brand that uses blockchain technology
                    to create unique digital collectibles and physical
                    merchandise. Our digital collectibles, called NFTs, are
                    available on OpenSea, the leading marketplace for buying and
                    selling NFTs.
                    <br />
                    Join us in spreading joy and playfulness!
                  </p>
                </div>
              </div>
            </div>
            <div className="relative inline-block w-full after:absolute after:-bottom-48 after:left-1/2  after:block after:h-72 after:w-72 after:-translate-x-1/2 after:rounded-full after:bg-pink-300">
              <img
                src="/src/assets/intro_image.jpg"
                width={300}
                height={200}
                
                alt="Image Alt"
                className="relative -bottom-2 z-10 mx-auto"
              />
            </div>
          </div>
        </div>
      </section>
    );
}

export default Intro;