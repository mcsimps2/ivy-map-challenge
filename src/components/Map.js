import React, { useState } from 'react';
import Marker from './Marker';

const Map = () => {
    // Random assortment of 5 markers on the map
    // IMPORTANT: Note that the DOM treats x as the numbers of pixels from the left, as usual, but
    // y is the numbers of pixels from the TOP, not the bottom
    const [markers, setMarkers] = useState(() => [...Array(5).keys()].map((el) => ({
        id: el,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        // Whether or not the marker should be highlighted (i.e. if it's selected)
        highlight: false
    })));

    return (
        <div
            style={{
                position: 'relative',
                height: '100vh',
                backgroundImage: 'repeating-linear-gradient(#ccc 0 1px, transparent 1px 100%), repeating-linear-gradient(90deg, #ccc 0 1px, transparent 1px 100%)',
                backgroundSize: '50px 50px'
            }}
        >
            {markers.map((marker) => (
                <Marker
                    key={`marker-${marker.id}`}
                    style={{
                        position: 'absolute',
                        left: marker.x,
                        top: marker.y,
                    }}
                    highlight={marker.highlight}
                >
                    {marker.id}
                </Marker>
            ))}
        </div>
    );
};

export default Map;
