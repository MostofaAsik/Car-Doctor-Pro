'use client';
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image"; // Import Next.js Image component
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
    const { data, status } = useSession();

    const navLinks = [
        { title: "Home", path: "/" },
        { title: "Services", path: "/services" },
        { title: "About", path: "/about" },
        { title: "Blog", path: "/blog" },
        { title: "Contact", path: "/contact" },
    ];

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <Link href={link.path} className="hover:bg-primary-500 hover:text-orange-500">{link.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <Link href={'/'} className="btn btn-ghost text-xl">Car Doctor </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link href={link.path} className="hover:bg-primary-500 hover:text-orange-500">{link.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="navbar-end flex items-center space-x-4">
                <IoCartOutline />
                <CiSearch />
                {status === "authenticated" &&
                    <Image
                        src={data?.user?.image}
                        alt="User Avatar"
                        width={40}
                        height={40}
                        title={data?.user?.name}
                        className="rounded-full"
                    />}

                <a className="btn btn-outline px-5 btn-primary hover:text-white">Appointment</a>

            </div>
            {status === "authenticated" ? (
                <button onClick={() => signOut()} className="btn btn-ghost">Log Out</button>

            ) : (
                <Link href={'/signin'} className="btn btn-ghost">Sign In</Link>
            )}
        </div>
    );
};

export default Navbar;
