import Link from "next/link";

const headerData = [
    {
        title: <Link href="/">Home</Link>

    },
    {
        title: <Link href="/websites">Websites</Link>
    },
    {
        title: <Link href="/apps-software">Apps and Softwares</Link>

    },
    {
        title: <Link href="/capabilities">Capabilities</Link>
    },
    {
        title: "Contact",
        submenu: [{
            number: "0919 078 0760 (Smart)",
            number: "0917 704 3877 (Globe)",
            number: "2 8810 4356"
        }]
    },
]

export default headerData;