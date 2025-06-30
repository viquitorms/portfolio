import type { ReactNode } from "react";
import DrawerSide from "../organisms/DrawerSide";
import Header from "../organisms/Header";
import SideNavigation from "../organisms/SideNavigation";

interface IMainLayout {
    children: ReactNode;
}

export default function MainLayout(props: IMainLayout) {
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <Header />
                <main className="p-10">
                    <div className="flex flex-col gap-20">
                        {props.children}
                    </div>
                    <SideNavigation />
                </main>
                <DrawerSide />
            </div>
        </div>
    );
}