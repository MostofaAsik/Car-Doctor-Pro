'use client';

import Image from "next/image";
import Link from "next/link";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";

const SignIn = () => {
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
                        Sign In
                    </h1>
                    <form className="space-y-6">

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
                                required
                                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter your password"
                            />
                        </div>
                        {/* Submit Button */}
                        <div>
                            <button
                                type="submit"
                                className="w-full px-4 py-2 text-sm font-medium text-white btn btn-primary hover:bg-orange-700 rounded-md shadow-sm"
                            >
                                Sign Up
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
                            >
                                <FaGoogle className="text-red-500 mr-2" /> Google
                            </button>
                            <button
                                type="button"
                                className="flex items-center justify-center px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded-md shadow-sm hover:bg-gray-100"
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
