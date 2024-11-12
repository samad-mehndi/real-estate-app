import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css/bundle';

export default function Listing() {
    SwiperCore.use([Navigation]);
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const params = useParams();
  useEffect(() => {
    const fetchListing = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/listing/get/${params.listingId}`);
        const data = await response.json();
        if (data.success === false) {
          setError(true);
          setLoading(false);
          return;
        }
          setListing(data);
          setLoading(false);
          setError(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchListing();
  }, [params.listingId]);
    return <main>
        {loading && <p className="text-center my-7 text-2xl">Loading...</p>}
        {error && <p className="text-center my-7 text-2xl">Something went wrong!</p>}
        {listing && !loading && !error && <>
            <Swiper navigation>
                {listing.imageUrls.map((imageUrl) => (
                    <SwiperSlide key={imageUrl}>
                        <div className="h-[550px]" style={{background:`url(${imageUrl}) center no-repeat`}}></div>
                    </SwiperSlide>))}
            </Swiper>
        </>
        }
    </main>;
}
