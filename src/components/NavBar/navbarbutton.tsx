import Link from "next/link";

export default function NavBarButton({
    children,
    link
}: Readonly<{
    children: React.ReactNode;
    link: string;
}>){
    return (
        <>
            <Link href={link} className="text-white text-2xl hover:text-amber-100 px-5">{children}</Link>
        </>
    )
}