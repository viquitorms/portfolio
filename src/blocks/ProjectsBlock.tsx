export default function ProjectsBlock() {
    return (
        <div id="projects" className="flex flex-col items-center gap-10">

            <div className="flex flex-col items-center gap-3">
                <h1 className="text-5xl font-bold">Projects</h1>
                <p>These are projects are some of my skills really applied. Some of them area college projects, real projects to clients and personal projects. You can click on them to take a look to details.</p>
            </div>

            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Card Title
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
        </div>
    );
}