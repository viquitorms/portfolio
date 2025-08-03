export default function MainBlock() {
    return (
        <div id="main" className="min-h-screen flex flex-col justify-center">
            <div className="flex">
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row gap-8">
                        <img
                            src="/src/assets/images/personal/avatar.png"
                            className="max-w-80 rounded-full animate-spin animate-duration-[5000ms] animate-ease-in-out"
                        />
                        <div>
                            <div className="flex flex-col gap-2">
                                <h1 className="text-6xl font-bold">Victor Magalhães</h1>
                                <h1 className="text-2xl font-bold text-gray-400">Front-End Developer & Graphic Designer</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}