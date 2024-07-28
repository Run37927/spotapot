'use client'
import Map, { FullscreenControl, GeolocateControl, Marker, NavigationControl, Popup, ScaleControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useMemo } from 'react';

function HomeMap({ nearbyPotties, userLat, userLong }) {
    const initialViewState = {
        latitude: userLat,
        longitude: userLong,
        zoom: 10.5,
    };

    const pins = useMemo(
        () =>
            nearbyPotties.map((pot) => (
                <Marker
                    key={`marker-${pot.id}`}
                    longitude={pot.longitude}
                    latitude={pot.latitude}
                    anchor="bottom"
                >
                    <div className='animate-bounce'>
                        💩
                    </div>
                </Marker>
            )),
        [nearbyPotties]
    );

    return (
        <div className="relative h-screen w-full">
            <Map
                initialViewState={initialViewState}
                mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
                mapStyle="mapbox://styles/hhruhy/cltci8dlr00nd01rahtig4k1h"
            >
                <GeolocateControl position="top-left" />
                <FullscreenControl position="top-left" />
                <NavigationControl position="top-left" />
                <ScaleControl />

                {pins}
            </Map>
        </div>
    )
}

export default HomeMap