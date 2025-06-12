export default function Header() {
    return (
        <div className="navbar w-full fixed bg-gray-800 z-50">
            <div className="flex-none lg:hidden">
                <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block h-6 w-6 stroke-current"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                    </svg>
                </label>
            </div>
            <div className="mx-2 flex-1 px-2">Victor Magalhães</div>
            <div className="hidden flex-none lg:block">
                <ul className="menu menu-horizontal">
                    {/* Navbar menu content here */}
                    <li><a>Sobre mim</a></li>
                    <li><a>Projetos</a></li>
                    <li><a>Contatos</a></li>
                    <li><a>GitHub</a></li>
                </ul>
            </div>
        </div>
    );
}