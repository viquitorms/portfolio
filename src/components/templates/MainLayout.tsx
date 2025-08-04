import { Outlet } from "react-router";
import DrawerSide from "../organisms/DrawerSide.tsx";
import Header from "../organisms/Header.tsx";
import Footer from "../organisms/Footer.tsx";

export default function MainLayout() {
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center ">
                <Header />
                <main>
                    <div className="flex flex-col gap-20">
                        <Outlet />
                    </div>
                </main>
                <Footer />
                <DrawerSide />
            </div>
        </div>
    );
}
