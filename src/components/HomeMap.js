'use client'
import Map, { FullscreenControl, GeolocateControl, Marker, NavigationControl, Popup, ScaleControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useMemo, useState } from 'react';
import { Button } from './ui/button';
import { Plus } from 'lucide-react'

function HomeMap({ nearbyPotties, userLat, userLong, onAddPotty }) {
    const [newPottyLocation, setNewPottyLocation] = useState(null);
    const [showPopup, setShowPopup] = useState(false);

    const initialViewState = {
        latitude: userLat,
        longitude: userLong,
        zoom: 11.3,
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
                    <div className='animate-bounce text-3xl'>
                        💩
                    </div>
                </Marker>
            )),
        [nearbyPotties]
    );

    const handleAddPotty = () => {
        if (newPottyLocation) {
            onAddPotty(newPottyLocation);
            setNewPottyLocation(null);
            setShowPopup(false);
        }
    }

    return (
        <div className="relative h-screen w-full">
            <Map
                initialViewState={initialViewState}
                mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
                mapStyle="mapbox://styles/hhruhy/cltci8dlr00nd01rahtig4k1h"
                onClick={(e) => {
                    setNewPottyLocation({
                        longitude: e.lngLat.lng,
                        latitude: e.lngLat.lat,
                    });
                    setShowPopup(true);
                }}
            >
                <GeolocateControl position="top-right" />
                <FullscreenControl position="top-right" />
                <NavigationControl position="top-right" />
                <ScaleControl />

                {pins}

                {showPopup && newPottyLocation && (
                    <Popup
                        longitude={newPottyLocation.longitude}
                        latitude={newPottyLocation.latitude}
                        anchor="bottom"
                        onClose={() => setShowPopup(false)}
                    >
                        <div className='p-2 space-y-4'>
                            <h2 className='font-medium text-lg'>Add a new potty here?</h2>
                            <Button
                                variant='outline'
                                className='font-semibold text-sm flex items-center w-full gap-1'
                                onClick={handleAddPotty}
                            >
                                <Plus className='h-4 w-4 text-center' />
                                Add Potty
                            </Button>
                        </div>
                    </Popup>
                )}
            </Map>
        </div>
    )
}

export default HomeMap