import React from 'react';

export default function CustomTextField({ type, name, placeholder, onChange, value, className }) {
    return (
        <div>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                className={className}
            />
        </div>
    );
}
