import { useState } from "react"
import React from 'react'
import authService from "../appwrite/auth"
import { Link, useNavigate } from "react-router-dom"
import { login } from "../store/authSlice"
import { Button, Logo, Input } from './index'
import { useDispatch } from "react-redux"
import { useForm } from "react-hook-form"


function SignUp() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState("")

    const create = async (data) => {
        setError("")
        try {
            const userData = await authService.createAccount(data)
            if (userData) {
                const userData = await authService.getCurrentUser()
                if (userData) dispatch(login(userData))

                navigate('/')
            }
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <div className="flex items-center justify-center">
            <div className={`mx-auto w-full max-w-lg bg-[#114232] rounded-xl p-10 border border-black/10`}>

                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full text-center text-4xl">
                        <Logo width="100%" />
                    </span>
                </div>

                <h2 className="text-center text-2xl font-bold leading-tight text-[#deedca]">Sign up to create account</h2>

                <p className="mt-2 text-center text-base text-[#deedca]/90">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign In
                    </Link>
                </p>

                {error && <p className="text-red-600 mt-8 text-center" >{error}</p>}

                <form onSubmit={handleSubmit(create)}>
                    <div className="space-y-5">
                        <Input
                            label="Full name: "
                            placeholder="Enter your name"
                            className="placeholder-[#deedca]/50 bg-[#deedca]/20 focus:bg-[#deedca]/40"
                            {...register("name", {
                                required: true,
                            })}
                        />

                        <Input
                            label="Email: "
                            placeholder="Enter your email"
                            className="placeholder-[#deedca]/50 bg-[#deedca]/20 focus:bg-[#deedca]/40"
                            type="email"
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || "Email address must be a valid address",
                                }
                            })}
                        />

                        <Input
                            label="Password: "
                            placeholder="Enter your password"
                            className="placeholder-[#deedca]/50 bg-[#deedca]/20 focus:bg-[#deedca]/40"
                            {...register("password", {
                                required: true,
                            })}
                        />

                        <Button
                            type="submit"
                            className="w-full"
                            bgColor="bg-[#deedca]"
                        >Create Account</Button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default SignUp
