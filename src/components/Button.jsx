import React from 'react'

function Button({
    children,
    type = 'button',
    bgColor = 'bg-[#deedca]',
    textColor = 'text-[#114232]',
    className = '',
    ...props
}) {
    return (
        <button className={`px-4 py-2 rounded-lg font-semibold ${bgColor} ${textColor} ${className}`} {...props} >
            {children}
        </button >
    )
}

export default Button
