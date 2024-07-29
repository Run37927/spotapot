'use client'
import { useEffect, useState } from "react";
import HomeMap from "./HomeMap";
import { useToast } from "./ui/use-toast";
import { Loader2 } from "lucide-react";

function MapList() {
    const [nearbyPotties, setNearbyPotties] = useState([]);
    const [location, setLocation] = useState({
        latitude: 49.090182,
        longitude: -123.028390
    });

    const { toast } = useToast();

    useEffect(() => {
        const fetchPotties = async () => {
            try {
                const response = await fetch('/api/potty/get');

                if (!response.ok) {
                    toast({
                        variant: "destructive",
                        title: `Something went wrong.`,
                        description: `Failed to fetch potties, please try again`
                    });
                }

                const potties = await response.json();
                setNearbyPotties(potties);
            } catch (error) {
                console.error('Error fetching potties:', error);
            }
        };

        fetchPotties();
    }, []);

    const handleAddPotty = async (newPottyLocation) => {
        try {
            const response = await fetch('/api/potty/post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: `Potty ${nearbyPotties.length + 1}`,
                    latitude: newPottyLocation.latitude,
                    longitude: newPottyLocation.longitude
                })
            });

            if (!response.ok) {
                toast({
                    variant: "destructive",
                    title: `Something went wrong.`,
                    description: `${response.status}`
                });
            } else {
                toast({
                    variant: "success",
                    title: `Porta Potty Added!`,
                    description: `Thank you for your contribution🙏🏼`
                })
            }

            const newPotty = await response.json();
            setNearbyPotties([...nearbyPotties, newPotty]);
        } catch (error) {
            console.error('Error adding potty:', error);
        }
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
                <Loader2 className="w-10 h-10 animate-spin" />
            )}
        </>
    )
}

export default MapList