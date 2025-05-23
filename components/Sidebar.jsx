'use client'

import React, { useState } from 'react'
import Image from "next/image";
import { useRouter, usePathname } from 'next/navigation';
import SidebarLink from './SidebarLink';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter()

    const pathname = usePathname();

    const isActive = pathname === '/';

    return (
        <aside
            className="w-[260px] fixed top-[92px] left-0 h-[calc(100vh-92px)] bg-secondary text-sidebar p-4"
        >
            <div className="rounded-[10px] bg-background p-3">
                <div className="flex justify-start items-center">
                    <Image
                        src='/google_logo.png'
                        width={42}
                        height={42}
                        alt="company logo"
                    />
                    <span className="ml-2 font-semibold text-[16px] text-heading">Google</span>
                </div>
                <div className="flex justify-between items-center pt-3">
                    <div className="flex flex-col justify-center items-center">
                        <div className="text-subheading font-semibold text-[12px]">567</div>
                        <div className="text-sidebar font-normal text-[10px]">Followers</div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="text-subheading font-semibold text-[12px]">34</div>
                        <div className="text-sidebar font-normal text-[10px]">Following</div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="text-subheading font-semibold text-[12px]">12</div>
                        <div className="text-sidebar font-normal text-[10px]">Post</div>
                    </div>
                </div>
            </div>
            <nav className="mt-4 flex flex-col justify-center items-start gap-5">

                <SidebarLink href="/" icon="/home.png" label="Home" />
                <SidebarLink href="/profile" icon="/profile.png" label="profile" />
                <SidebarLink href="/inbox" icon="/inbox.png" label="inbox" />
                <SidebarLink href="/feed" icon="/feed.png" label="feed" />

                <div className="flex justify-between items-center p-3 w-full hover:bg-[#f2f2f2] rounded-2xl cursor-pointer">
                    <div className="flex gap-2">
                        <Image
                            src="/student_engage.png"
                            width={24}
                            height={24}
                            alt="student engage"
                            title="student engage"
                        />
                        <span className="text-sidebar font-semibold text-[16px]">Student Engage</span>
                    </div>
                    <Image
                        src="/arrow.png"
                        width={24}
                        height={24}
                        alt="down arrow"
                    />
                </div>

                <div className="w-full cursor-pointer">
                    {/* Main button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`group w-full flex justify-between items-center p-3 hover:bg-[#f2f2f2] rounded-2xl transition-all duration-300 focus:bg-blueish`}
                    >
                        <div className="flex items-center gap-2">
                            <Image
                                src="/add.png"
                                width={24}
                                height={24}
                                alt="plus"
                                className="invert brightness-35 opacity-100 transition-all duration-200 group-focus:invert group-focus:brightness-0 group-focus:contrast-200"
                            />
                            <span className="text-sidebar text-[16px] font-semibold group-focus:invert group-focus:brightness-0 group-focus:contrast-200">Posting</span>
                        </div>
                        <Image
                            src="/arrow.png"
                            width={24}
                            height={24}
                            alt="arrow"
                            className={`transition-all duration-200 transform ${isOpen ? "rotate-180" : ""} group-focus:invert group-focus:brightness-0 group-focus:contrast-200`}
                        />
                    </button>

                    {/* Dropdown items */}
                    {isOpen && (
                        <div className="mt-1 bg-white rounded-2xl shadow-sm overflow-hidden text-sm">
                            <div className="px-4 py-2 font-semibold text-black bg-[#f2f2f2]"
                                onClick={() => router.push('/posting')}
                            >
                                Jobs
                            </div>
                            <div className="px-4 py-2 text-gray-700 hover:bg-[#f2f2f2] cursor-pointer">
                                Campus Recruitment
                            </div>
                            <div className="px-4 py-2 text-gray-700 hover:bg-[#f2f2f2] cursor-pointer">
                                My Meetings
                            </div>
                        </div>
                    )}
                </div>

                <SidebarLink href="/events" icon="/events.png" label="events" />
                <SidebarLink href="/network" icon="/network.png" label="network" />
                <SidebarLink href="/analytics" icon="/analytics.png" label="analytics" />
                <SidebarLink href="/survey" icon="/survey.png" label="survey" />

            </nav>
        </aside>
    )
}

export default Sidebar