export default function MainBlock() {
    return (
        <div id="main" className="min-h-screen flex flex-col justify-center">
            <div className="flex">
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row gap-8">
                        <img
                            src="/portfolio/images/my-draw-transparent.png"
                            className="max-w-80 rounded-full animate-spin animate-duration-[5000ms] animate-ease-in-out"
                        />
                        <div>
                            <div className="flex flex-col gap-2">
                                <h1 className="text-5xl font-bold">Victor Magalhães</h1>
                                <h1 className="text-2xl font-bold text-gray-400">React & Blazor Front-End Developer</h1>
                            </div>
                            <div>
                                <p className="py-6">
                                    I am a React and Blazor Front-End Developer and also an university student who loves Graphic Design and Computation. My main working style involves building modern user interfaces, exploring creativity and usability Graphic Design principles to create dynamic and modularized applications with reusable, clean, atomic and customized components.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}