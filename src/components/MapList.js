'use client'
import { useEffect, useState } from "react";
import HomeMap from "./HomeMap";

const initialNearbyPotties = [
    {
        id: 1,
        latitude: 49.055053,
        longitude: -123.083848,
        name: "Potty 1"
    },
    {
        id: 2,
        latitude: 49.098709,
        longitude: -123.112296,
        name: "Potty 2"
    },
    {
        id: 3,
        latitude: 49.111964,
        longitude: -122.950714,
        name: "Potty 3"
    },
    {
        id: 4,
        latitude: 49.124450,
        longitude: -123.031020,
        name: "Potty 4"
    },
    {
        id: 5,
        latitude: 49.120322,
        longitude: -122.895820,
        name: "Potty 5"
    },
    {
        id: 6,
        latitude: 49.150070,
        longitude: -122.880391,
        name: "Potty 6"
    },
    {
        id: 7,
        latitude: 49.090483,
        longitude: -123.056464,
        name: "Potty 7"
    },
    {
        id: 8,
        latitude: 49.127163,
        longitude: -123.131869,
        name: "Potty 8"
    },
    {
        id: 9,
        latitude: 49.082339,
        longitude: -122.922361,
        name: "Potty 9"
    },
    {
        id: 10,
        latitude: 49.086918,
        longitude: -123.081159,
        name: "Potty 10"
    },
    {
        id: 11,
        latitude: 49.103262,
        longitude: -123.046587,
        name: "Potty 11"
    },
    {
        id: 12,
        latitude: 49.059236,
        longitude: -123.121373,
        name: "Potty 12"
    },
    {
        id: 13,
        latitude: 49.146930,
        longitude: -123.009257,
        name: "Potty 13"
    },
    {
        id: 14,
        latitude: 49.012727,
        longitude: -123.078443,
        name: "Potty 14"
    }
];

function MapList() {
    const [nearbyPotties, setNearbyPotties] = useState(initialNearbyPotties);

    const [location, setLocation] = useState({
        latitude: 49.090182,
        longitude: -123.028390
    });

    // Get user's location
    // function getLocation() {
    //     console.log("Attempting to fetch user's location...");
    //     if (navigator.geolocation) {
    //         navigator.geolocation.getCurrentPosition(
    //             (position) => {
    //                 console.log("Location access granted. Position:", position);
    //                 setLocation({
    //                     latitude: position.coords.latitude,
    //                     longitude: position.coords.longitude,
    //                 });
    //             },
    //             showError
    //         );
    //     } else {
    //         console.log("Geolocation is not supported by this browser.");
    //     }
    // }

    // function showError(error) {
    //     switch (error.code) {
    //         case error.PERMISSION_DENIED:
    //             console.log("User denied the request for Geolocation.");
    //             break;
    //         case error.POSITION_UNAVAILABLE:
    //             console.log("Location information is unavailable.");
    //             break;
    //         case error.TIMEOUT:
    //             console.log("The request to get user location timed out.");
    //             break;
    //         case error.UNKNOWN_ERROR:
    //             console.log("An unknown error occurred.");
    //             break;
    //     }
    // }

    // useEffect(() => {
    //     getLocation();
    // }, []);

    const handleAddPotty = (newPottyLocation) => {
        const newPotty = {
            id: nearbyPotties.length + 1,
            name: `Potty ${nearbyPotties.length + 1}`,
            ...newPottyLocation
        };
        setNearbyPotties([...nearbyPotties, newPotty]);
    };

    return (
        <>
            {location.latitude && location.longitude ? (
                <div className='h-screen'>
                    <HomeMap
                        nearbyPotties={nearbyPotties}
                        userLat={location.latitude}
                        userLong={location.longitude}
                        onAddPotty={handleAddPotty}
                    />
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </>
    )
}

export default MapList