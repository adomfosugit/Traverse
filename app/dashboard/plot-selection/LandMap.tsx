'use client';

import L from 'leaflet';
import { Marker, Popup, TileLayer } from 'react-leaflet';

import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css';
import { MapContainer } from 'react-leaflet';

//@ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon.src,
  iconRetinaUrl: markerIcon2x.src,
  shadowUrl: markerShadow.src,
});

type TCoordinate = {
  latitude: number;
  longitude: number;
  title: string;
  price: number;
  address: string;
};
interface ILandMapProps {
  center?: number[];
  coordinates?: TCoordinate[];
}
const LandMap = ({ center, coordinates }: ILandMapProps) => {
  return (
    <MapContainer
      center={(center as L.LatLngExpression) || [51, -0.09]}
      zoom={center ? 8 : 4}
      scrollWheelZoom={false}
      className="h-full rounded-lg"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {center && <Marker position={center as L.LatLngExpression} />}
      {coordinates &&
        coordinates?.length > 0 &&
        coordinates?.map((coordinate) => (
          <Marker
            key={`${coordinate.latitude}${coordinate.title}${coordinate.longitude}`}
            position={
              [coordinate.latitude, coordinate.longitude] as L.LatLngExpression
            }
          >
            <Popup>
              <strong>{coordinate.title}</strong> <br /> {coordinate.address}{' '}
              <br /> $ {coordinate.price}
            </Popup>
          </Marker>
        ))}
    </MapContainer>
  );
};

export default LandMap;
