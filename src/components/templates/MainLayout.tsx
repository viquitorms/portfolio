import { Outlet } from "react-router"; // <-- Import Outlet
import DrawerSide from "../organisms/DrawerSide.tsx";
import Header from "../organisms/Header.tsx";
import Footer from "../../blocks/main/FooterBlock.tsx";

export default function MainLayout() {
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <Header />
                <main>
                    <div className="flex flex-col gap-20 px-10">
                        <Outlet />
                    </div>
                </main>
                <Footer />
                <DrawerSide />
            </div>
        </div>
    );
}
