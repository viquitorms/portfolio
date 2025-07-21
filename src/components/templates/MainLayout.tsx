import type { ReactNode } from "react";
import DrawerSide from "../organisms/DrawerSide.tsx";
import Header from "../organisms/Header.tsx";
import Footer from "../../blocks/main/FooterBlock.tsx";

interface IMainLayout {
    children: ReactNode;
}

export default function MainLayout(props: IMainLayout) {
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <Header />
                <main>
                    <div className="flex flex-col gap-20 px-10">
                        {props.children}
                    </div>
                    {/* <SideNavigation /> */}
                </main>
                <Footer />
                <DrawerSide />
            </div>
        </div>
    );
}