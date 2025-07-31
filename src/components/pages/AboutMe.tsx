export default function AboutMe() {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src="/images/foto-victor.jpg"
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div>
                        <h1 className="text-5xl font-bold">Who am I?</h1>
                        <p className="py-6">
                            I am a 23-year-old React and Blazor Front-End Developer and also an university student who loves Graphic Design and Computation. My main working style involves building modern user interfaces, exploring usability and Graphic Design principles to create dynamic and modularized applications with reusable, clean, atomic and customized components.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}