import React from 'react';

const ContactNumber = ({ copyText, children }) => {
    const handleClick = (e) => {
        e.preventDefault(); // Prevent the default link behavior
        navigator.clipboard.writeText(copyText)
        .then(() => {
            alert('Copied to clipboard!');
        })
        .catch(err => {
            console.error('Failed to copy!', err);
        });
    };

    return (
        <a href="!#" onClick={handleClick}>
            {children}
        </a>
    );
};

export default ContactNumber;