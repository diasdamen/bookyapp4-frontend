'use client';

import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import {Icon} from 'leaflet';
import { LatLngTuple } from 'leaflet';

// leaflet css
import 'leaflet/dist/leaflet.css';

type MarkerType = {
  position: LatLngTuple;
  title: string;
  subtitle: string;
  image: string;
};

const markers: MarkerType[] = [
  {
    position: [43.24935, 76.93423],
    title: 'Royal Hotel',
    subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    image: '/assets/map/1.png',
  },
];

const customIcon = new Icon ({
  iconUrl: '/assets/pin-solid.svg',
  iconSize: [40, 40],
});

const Map = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)',
  });

  return (
    <section className='relative xl:after:w-full xl:after:h-[240px] xl:after:bg-gradient-to-b xl:after:from-white xl:after:via-white/80 xl:after:to-white/20 xl:after:absolute xl:after:top-0 xl:after:z-20'>
      <MapContainer 
        center={[43.24935, 76.93423]} 
        zoom={isMobile ? 10 : 15} 
        className={`${isMobile ? 'h-[300px]' : 'h-[600px]'} z-10`}
        zoomControl={false}
      >
        <TileLayer 
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' 
          url='https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png' 
        />
        {/* markers */}
        {markers.map((marker, index)=> {
          return (
            <Marker 
              key={index} 
              position={marker.position} 
              icon={customIcon}
            >
              <Popup>
                <div className='flex gap-x-[30px]'>
                  <div className='flex-1'>
                    <h3>{marker.title}</h3>
                    <p className='leading-snug'>{marker.subtitle}</p>
                  </div>
                  <div className='flex-1'>
                    <Image src={marker.image} width={130} height={160} alt='' />
                  </div>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </section>
  );
};

export default Map