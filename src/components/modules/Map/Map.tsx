import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { FC } from "react";
import { useEffect, useRef } from "react";

interface MapProps {
  className?: string;
  position: number[];
  mapChangeHandler?: () => void;
}
export const Map: FC<MapProps> = ({
  className,
  position,
  mapChangeHandler,
}) => {
  const markerRef = useRef<any>();

  function MarkerInCenter() {
    const map = useMap();
    useEffect(() => {
      map.on("move", () => {
        if (mapChangeHandler) {
          mapChangeHandler();
        }
        const center = map.getSize().divideBy(2);
        const targetPoint = map.containerPointToLayerPoint(center);
        const targetLatLng = map.layerPointToLatLng(targetPoint);
        markerRef.current.setLatLng(targetLatLng);
        markerRef.current.getElement().style.pointerEvents = "none";
      });
    }, [map]);

    return null;
  }
  return (
    <MapContainer
      preferCanvas={true}
      className={`${className && className} relative h-[250px] rounded-md lg:w-full`}
      center={position as any}
      zoom={10}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution={
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker ref={markerRef} position={position as any}></Marker>
      {mapChangeHandler && <MarkerInCenter />}
    </MapContainer>
  );
};
