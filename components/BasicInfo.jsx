import Image from 'next/image'
import React from 'react'

const BasicInfo = ({src, alt, imageText, mainText}) => {
    return (
        <div>
            <div className="flex gap-1 space-y-0.5">
                <Image
                    src={src}
                    width={12}
                    height={12}
                    alt={alt}
                    title={alt}
                    className="object-contain"
                />
                <p className="font-medium text-[10px] text-sidebar uppercase">{imageText}</p>
            </div>
            <p className="font-medium text-[14px] text-heading">{mainText}</p>
        </div>
    )
}

export default BasicInfo