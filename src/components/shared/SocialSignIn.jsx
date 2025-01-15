
import { signIn } from "next-auth/react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";

const SocialSignIn = () => {
    console.log("signIn function:", signIn); // Debug

    const handleSignIn = async (provider) => {
        try {
            const result = await signIn(provider, { callbackUrl: "/" });
            toast.success("Sign-in successful!");
            console.log("Sign-in result:", result);
        } catch (error) {
            console.error("Error during sign-in:", error);
        }
    };

    return (
        <>
            <button
                type="button"
                className="flex items-center justify-center px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded-md shadow-sm hover:bg-gray-100"
                onClick={() => handleSignIn("google")}
            >
                <FaGoogle className="text-red-500 mr-2" /> Google
            </button>
            <button
                type="button"
                className="flex items-center justify-center px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded-md shadow-sm hover:bg-gray-100"
                onClick={() => handleSignIn("github")}
            >
                <FaGithub className="text-black mr-2" /> GitHub
            </button>
            <ToastContainer />
        </>
    );
};

export default SocialSignIn;
