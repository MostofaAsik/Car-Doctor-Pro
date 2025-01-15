'use client';

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import SocialSignIn from "@/components/shared/SocialSignIn";

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch("/api/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            if (res.ok) {
                toast.success("User created successfully!");
                setTimeout(() => {
                    router.push("/"); // Navigate to home page
                }, 2000); // Delay to allow toast to show
            } else {
                toast.error(data.message || "Something went wrong.");
            }
        } catch (err) {
            toast.error("Error occurred while signing up.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col md:flex-row w-full h-screen">



            {/* Image Section */}
            <div className="hidden md:flex flex-1 items-center justify-center">
                <div className="relative">
                    <Image
                        src="/assets/images/login/login.svg"
                        alt="Sign In"
                        height={500}
                        width={400}
                    />
                </div>
            </div>

            {/* Form Section */}
            <div className="flex-1 flex items-center justify-center px-6 py-12 bg-white">
                <div className="w-full max-w-md">
                    <h1 className="text-2xl md:text-4xl font-bold text-center mb-6">
                        Sign Up
                    </h1>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {/* Name Input */}
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter your name"
                            />
                        </div>
                        {/* Email Input */}
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter your email"
                            />
                        </div>
                        {/* Password Input */}
                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter your password"
                            />
                        </div>
                        {/* Submit Button */}
                        <div>
                            <button
                                type="submit"
                                disabled={loading}
                                className={`w-full px-4 py-2 text-sm font-medium text-white btn btn-primary hover:bg-orange-700 rounded-md shadow-sm ${loading ? "opacity-50 cursor-not-allowed" : ""
                                    }`}
                            >
                                {loading ? "Signing Up..." : "Sign Up"}
                            </button>
                        </div>
                    </form>

                    {/* Social Login */}
                    <div className="mt-8">
                        <p className="text-center text-gray-600 mb-4 text-sm">
                            Or sign in with
                        </p>
                        <div className="flex justify-center space-x-4">
                            <SocialSignIn />
                        </div>
                        <p className="text-center text-gray-600 mb-4 text-sm">
                            Already have an account?{" "}
                            <Link href="/signin" className="text-orange-600">
                                Sign in
                            </Link>
                        </p>
                    </div>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default SignUp;
