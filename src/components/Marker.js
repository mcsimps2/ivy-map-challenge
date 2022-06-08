import React from 'react';

const Marker = ({ style, children, highlight = false }) => {
    return (
        <div
            style={{
                color: 'white',
                textAlign: 'center',
                backgroundColor: highlight ? 'red' : 'blue',
                borderRadius: '50%',
                border: '2px solid black',
                width: '24px',
                height: '24px',
                // Center the marker
                transform: 'translate(-50%, -50%)',
                MozUserSelect: 'none',
                KhtmlUserSelect: 'none',
                WebkitUserSelect: 'none',
                MsUserSelect: 'none',
                userSelect: 'none',
                ...style
            }}
        >
            {children}
        </div>
    );
};

export default Marker;
