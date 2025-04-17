import NavBarButton from "./navbarbutton"

export default function NavBar() {
    return (
        <>
            <div className="w-1/2 h-16 m-auto my-10 bg-black rounded-full border-white flex justify-center items-center">
                <NavBarButton link="/">Home</NavBarButton>
                <NavBarButton link="/courses">Our Courses</NavBarButton>
                <NavBarButton link="/contact-us">Contact Us</NavBarButton>
            </div>
        </>
    )
}