import scss from './Hero.module.scss';

const Hero = () => {
    return (
        <section>
            <div class="relative h-screen overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                {/* <div class="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxjb2RlfGVufDB8MHx8fDE2OTQwOTg0MTZ8MA&ixlib=rb-4.0.3&q=80&w=1080"
                        alt="Background Image"
                        class="h-full w-full object-cover object-center"
                    />
                    <div class="absolute inset-0 bg-black opacity-50"></div>
                </div> */}

                <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
                    <h1 className="mb-4 text-5xl font-bold leading-tight"></h1>
                    NavaSky
                    <p className="mb-8 text-lg text-gray-300">
                        We see ourselves as partners of our clients, launching their websites into
                        the orbit of success through full-funnel marketing approach
                    </p>
                    <a
                        href="#"
                        className="transform rounded-full bg-blue-400 px-6 py-2 text-lg font-semibold text-gray-900 transition duration-300 ease-in-out hover:scale-105 hover:bg-yellow-300 hover:shadow-lg"
                    >
                        Let’s talk
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
