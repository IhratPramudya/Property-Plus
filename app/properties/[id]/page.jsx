'use client'
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { fetchProperties } from '@/utils/requests';
import PropertyHeaderImage from '@/components/PropertyHeaderImage';

const PropertyPage = () => {
    const { id } = useParams();

    const [property, setProperty] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPropertyData = async () => {
            if(!id) return;

            try {
                const property = await fetchProperties(id);
                setProperty(property);
            } catch(error) {
                console.log('Error fetching property', error);
            } finally {
                setLoading(false);
            }
        }

        if (property === null) {
            fetchPropertyData();
        }
    }, [id, property]);

    if(!property && !loading) {
        return (
            <h1 className='text-center text-2xl font-bold mt-10'>
                Property Not Found
            </h1>
        )
    }

    return <>
        {!loading && property && (<>
            <PropertyHeaderImage image={property.images[0]} />
        </>)}
    </>
}


export default PropertyPage;

