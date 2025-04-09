'use client'

import { usePathname } from "next/navigation"

const getTitleFromPath = (path) => {
    if (path.startsWith("/posting")) return "Posting"
    if (path === '/') return "Home"

    return "Page"
}

const RouteName = () => {
    const pathname = usePathname()
    const pageTitle = getTitleFromPath(pathname)
    return (
        <div className="flex justify-start pl-5 items-center w-[600px] font-bold text-[24px] text-heading">{pageTitle}</div>
    )
}

export default RouteName