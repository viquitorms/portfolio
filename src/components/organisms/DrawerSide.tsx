export default function DrawerSide() {
    return (
        <div className="drawer-side">
            <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu bg-base-200 min-h-full w-80 p-4">
                <li><a>About me</a></li>
                <li><a>Projects</a></li>
                <li><a>Contacts</a></li>
                <li><a>GitHub</a></li>
            </ul>
        </div>
    );
}