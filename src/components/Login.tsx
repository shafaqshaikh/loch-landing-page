import React, {useState} from "react";
import { motion } from "framer-motion";

export function Login() {
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")


    const onSubmit = () => {
        if (!email.includes("@") || !email.includes(".") || !email.length) {
            setError("Please enter valid email*")
        } else {
            window.location.href = 'https://app.loch.one/welcome';
        }
    }

    const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (error) setError("")
        setEmail(e.target.value)
    }
    return <div className="max-w-sm w-full">
            <h2 className="text-4xl font-medium text-gray-400 mb-4 text-center lg:text-left"  >Sign up for exclusive access.</h2>
            {error && <p className={"text-red-500 text-xs mb-2"}>{error}</p>}
            <motion.input
                onChange={(e)=> onTextChange(e)}
                type="email"
                placeholder="Enter your email"
                whileHover={{ scale: 1.05 }}
                whileFocus={{ boxShadow: '0 0 0 4px rgba(59,130,246,0.5)' }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative z-10 w-full border px-4 py-4 mb-4 rounded-lg text-black placeholder-gray-400 pointer-events-auto"
            />
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={onSubmit}
                className="bg-black text-white w-full py-4 rounded-lg"
            >
                Get Started
            </motion.button>
            <p className="text-base font-semibold text-center text-gray-900 mt-2">You’ll receive an email with an invite
                link to join.</p>
        </div>

}