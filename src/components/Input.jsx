import React, { useId } from 'react'

const Input = React.forwardRef(function Input({
    label,
    type = 'text',
    className = '',
    labelClass = 'text-[#deedca]',
    ...props
}, ref) {
    const id = useId()
    return (
        <div className='w-full'>
            {label && <label
                className={`inline-block mb-1 pl-1 ${labelClass}`}
                htmlFor={id}
            >
                {label}
            </label>}

            <input
                type={type}
                className={`px-3 py-2 rounded-lg text-black outline-none duration-200 w-full ${className}`}
                ref={ref}
                {...props}
                id={id}
            />
        </div>
    )
})

export default Input
