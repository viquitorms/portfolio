import { useEffect, useState } from "react";

const sections = [
    { id: "main", label: "Who's Victor?" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
];

const SideNavigation = () => {
    const [activeSection, setActiveSection] = useState<string | null>(null);
    const [, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);

            let current: string | null = null;
            for (const section of sections) {
                const element = document.getElementById(section.id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                        current = section.id;
                    }
                }
            }
            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScrollTo = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div
            className={`fixed right-15 top-1/3 z-50 flex flex-col items-end gap-2 rounded-lg transition-all duration-300`}
        >
            {sections.map((section) => (
                <div className="tooltip tooltip-left" data-tip={section.label}>
                    <button
                        key={section.id}
                        onClick={() => handleScrollTo(section.id)}
                        className={`btn btn-circle btn-sm size-3 hover:size-6 hover:btn-primary transition-all duration-150 ${activeSection === section.id ? "btn-primary text-white" : "btn-outline"}`}
                    ></button>
                </div>
            ))
            }
        </div >
    );
};

export default SideNavigation;
