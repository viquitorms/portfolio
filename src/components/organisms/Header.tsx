import { IoMdMenu } from "react-icons/io";
import { Pages } from "../../data/Pages.tsx";
import { useMediaQuery } from 'react-responsive'
import Avatar from "../../assets/images/personal/avatar.png"

export default function Header() {

    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return (
        <div className="flex flex-row p-2 justify-between sticky top-0 z-50 w-full bg-base-100">
            <div>
                <a className="flex flex-row items-center text-xl font-bold gap-2 cursor-pointer" href="/">
                    <img
                        src={Avatar}
                        className="max-w-10 rounded-full"
                    />
                    Victor Magalhães
                </a>
            </div>
            <div>
                {isDesktopOrLaptop && RenderLinksOnHeader()}
                {isTabletOrMobile && RenderDrawer()}
            </div>
        </div>
    );
}

function RenderDrawer() {
    return (
        <div>
            <div className="drawer drawer-end">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <label htmlFor="my-drawer" className="btn btn-ghost drawer-button"><IoMdMenu size={20} /></label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    {RenderLinksOnDrawer()}
                </div>
            </div>
        </div>
    )
}

function RenderLinksOnHeader() {
    return (
        <ul className={`menu menu-horizontal`}>
            {MapLinks()}
        </ul>
    )
}

function RenderLinksOnDrawer() {
    return (
        <ul className={`menu menu-vertical bg-base-200 text-base-content min-h-full w-80 p-4`}>
            {MapLinks()}
        </ul>
    )
}

function MapLinks() {
    return (
        Pages.map((page, key) => {
            return <li><a key={key} href={page.href} target={page.target}>{page.name}</a></li>
        })
    )
}