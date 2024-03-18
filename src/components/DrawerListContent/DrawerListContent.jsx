import React from 'react'
import './DrawerListContent.css'

/**
 * Represents an option list for a mobile options drawer.
 * @param {array} options - The option list for display
 */
export default function DrawerListContent({ options }) {
    return (
        <>
            {
                options?.map(option => <div
                    key={option?.text}
                    className={`mobile-paydin-drawer-list-content-option ${option?.className}`}
                    onClick={option?.onClick}
                >
                    {option?.image}
                    <div className="mobile-paydin-drawer-list-content-option-text">{option?.text}</div>
                </div>
                )
            }
        </>
    )
}