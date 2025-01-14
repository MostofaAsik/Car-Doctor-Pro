'use client';

import Image from "next/image";
import Link from "next/link";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { signIn } from "next-auth/react";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignIn = () => {
    const [formData, setFormData] = useState({
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

        const result = await signIn("credentials", {
            redirect: false,
            email: formData.email,
            password: formData.password,
        });

        if (result.error) {
            toast.error(result.error || "Login failed");
        } else {
            toast.success("Login successful!");
            setTimeout(() => {
                router.push("/"); // Redirect to home page
            }, 2000);
        }

        setLoading(false);
    };

    return (
        <div className="flex flex-col md:flex-row w-full h-screen">
            <ToastContainer />
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
                        Sign In
                    </h1>
                    <form className="space-y-6" onSubmit={handleSubmit}>
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
                                {loading ? "Signing In..." : "Sign In"}
                            </button>
                        </div>
                    </form>

                    {/* Social Login */}
                    <div className="mt-8">
                        <p className="text-center text-gray-600 mb-4 text-sm">
                            Or sign in with
                        </p>
                        <div className="flex justify-center space-x-4">
                            <button
                                type="button"
                                className="flex items-center justify-center px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded-md shadow-sm hover:bg-gray-100"
                                onClick={() => signIn("google")}
                            >
                                <FaGoogle className="text-red-500 mr-2" /> Google
                            </button>
                            <button
                                type="button"
                                className="flex items-center justify-center px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded-md shadow-sm hover:bg-gray-100"
                                onClick={() => signIn("github")}
                            >
                                <FaGithub className="text-black mr-2" /> GitHub
                            </button>
                        </div>
                        <p className="text-center text-gray-600 mb-4 text-sm mt-10">
                            Not account yet? <Link href="/signup" className="text-orange-600">Sign Up</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
