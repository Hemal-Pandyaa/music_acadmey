import './globals.css';
import NavBar from "@/components/NavBar/navbar";
import CustomMouse from '@/components/CustomMouse';


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className=''>
            <body>
                <CustomMouse />
                <NavBar />
                {children}
            </body>
        </html>
    );
}
