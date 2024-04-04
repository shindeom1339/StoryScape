import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
    return (
        // <section className="relative overflow-hidden py-10 bg-[#114232]">
        //     <div className="relative z-10 mx-auto max-w-7xl px-4">
        //         <div className="-m-6 flex flex-wrap">
        //             <div className="w-full p-6 md:w-1/2 lg:w-5/12">
        //                 <div className="flex h-full flex-col justify-between">
        //                     <div className="mb-4 inline-flex items-center">
        //                         <Logo width="100px" />
        //                     </div>
        //                     <div>
        //                         <p className="text-sm text-[#caed9c]">
        //                             &copy; Copyright 2024. All Rights Reserved by StoryScape.
        //                         </p>
        //                     </div>
        //                 </div>
        //             </div>
        //             {/* <div className="w-full p-6 md:w-1/2 lg:w-2/12">
        //                 <div className="h-full">
        //                     <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-[#caed9c]">
        //                         Company
        //                     </h3>
        //                     <ul>
        //                         <li className="mb-4">
        //                             <Link
        //                                 className="font-normal text-sm text-[#deedca]"
        //                                 to="/"
        //                             >
        //                                 Features
        //                             </Link>
        //                         </li>
        //                         <li className="mb-4">
        //                             <Link
        //                                 className="font-normal text-sm text-[#deedca]"
        //                                 to="/"
        //                             >
        //                                 Pricing
        //                             </Link>
        //                         </li>
        //                         <li className="mb-4">
        //                             <Link
        //                                 className="font-normal text-sm text-[#deedca]"
        //                                 to="/"
        //                             >
        //                                 Affiliate Program
        //                             </Link>
        //                         </li>
        //                         <li>
        //                             <Link
        //                                 className="font-normal text-sm text-[#deedca]"
        //                                 to="/"
        //                             >
        //                                 Press Kit
        //                             </Link>
        //                         </li>
        //                     </ul>
        //                 </div>
        //             </div>
        //             <div className="w-full p-6 md:w-1/2 lg:w-2/12">
        //                 <div className="h-full">
        //                     <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-[#caed9c]">
        //                         Support
        //                     </h3>
        //                     <ul>
        //                         <li className="mb-4">
        //                             <Link
        //                                 className="font-normal text-sm text-[#deedca]"
        //                                 to="/"
        //                             >
        //                                 Account
        //                             </Link>
        //                         </li>
        //                         <li className="mb-4">
        //                             <Link
        //                                 className="font-normal text-sm text-[#deedca]"
        //                                 to="/"
        //                             >
        //                                 Help
        //                             </Link>
        //                         </li>
        //                         <li className="mb-4">
        //                             <Link
        //                                 className="font-normal text-sm text-[#deedca]"
        //                                 to="/"
        //                             >
        //                                 Contact Us
        //                             </Link>
        //                         </li>
        //                         <li>
        //                             <Link
        //                                 className="font-normal text-sm text-[#deedca]"
        //                                 to="/"
        //                             >
        //                                 Customer Support
        //                             </Link>
        //                         </li>
        //                     </ul>
        //                 </div>
        //             </div>
        //             <div className="w-full p-6 md:w-1/2 lg:w-3/12">
        //                 <div className="h-full">
        //                     <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-[#caed9c]">
        //                         Legals
        //                     </h3>
        //                     <ul>
        //                         <li className="mb-4">
        //                             <Link
        //                                 className="font-normal text-sm text-[#deedca]"
        //                                 to="/"
        //                             >
        //                                 Terms &amp; Conditions
        //                             </Link>
        //                         </li>
        //                         <li className="mb-4">
        //                             <Link
        //                                 className="font-normal text-sm text-[#deedca]"
        //                                 to="/"
        //                             >
        //                                 Privacy Policy
        //                             </Link>
        //                         </li>
        //                         <li>
        //                             <Link
        //                                 className="font-normal text-sm text-[#deedca]"
        //                                 to="/"
        //                             >
        //                                 Licensing
        //                             </Link>
        //                         </li>
        //                     </ul>
        //                 </div>
        //             </div> */}
        //         </div>
        //     </div>
        // </section>

        <footer className="bottom-0 w-full">
            <section className="relative overflow-hidden py-6 lg:py-10 bg-[#114232]">
                <div className="relative z-10 mx-auto max-w-7xl px-4">
                    <div className="-m-6 flex flex-wrap">
                        <div className="w-full p-6 md:w-1/2 lg:w-5/12">
                            <div className="flex h-full flex-col justify-between">
                                <div className="mb-2 md:mb-4 inline-flex items-center">
                                    <Logo width="80px" />
                                </div>
                                <div>
                                    <p className="text-xs md:text-sm text-[#caed9c]">
                                        &copy; Copyright 2024. All Rights Reserved by StoryScape.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default Footer
