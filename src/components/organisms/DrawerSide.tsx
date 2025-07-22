import { Pages } from "../../data/Pages.tsx"

export default function DrawerSide() {
    return (
        <div className="drawer-side z-50">
            <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu bg-base-200 min-h-full w-80 p-4">
                {
                    Pages.map((page) => {
                        return <li><a href={page.href} target={page.target}>{page.name}</a></li>
                    })
                }
            </ul>
        </div>
    );
}