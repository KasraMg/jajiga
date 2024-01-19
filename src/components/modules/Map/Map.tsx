import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import { FC } from 'react';

interface MapProps {
    className?: string,
    position: number[]
}
export const Map: FC<MapProps> = ({ className, position }) => {
    return ( 
        <MapContainer preferCanvas={true} className={`${className && className} relative  lg:w-full rounded-md h-[250px]`} center={position as any} zoom={10} scrollWheelZoom={true}>
            <TileLayer
                attribution={'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position as any} draggable={true}>
              </Marker>
        </MapContainer>
    )
}


