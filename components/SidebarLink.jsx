'use client';

import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';

export default function SidebarLink({ href, icon, label }) {
    const router = useRouter();
    const pathname = usePathname();

    const isActive = pathname === href;

    return (
        <div
            className={`flex items-center gap-2 p-3 w-full rounded-2xl cursor-pointer transition-all ${isActive ? 'bg-blueish' : 'hover:bg-[#f2f2f2]'
                }`}
            onClick={() => router.push(href)}
        >
            <Image
                src={icon}
                width={24}
                height={24}
                alt={label}
                title={label}
                className={`${isActive ? 'invert brightness-0' : ''}`}
            />
            <span
                className={`font-semibold text-[16px] ${isActive ? 'text-white' : 'text-sidebar'
                    }`}
            >
                {label}
            </span>
        </div>
    );
}
