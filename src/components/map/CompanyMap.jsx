import { MapContainer, TileLayer, Marker, Popup, ZoomControl, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
import markerIcon from "leaflet/dist/images/marker-icon.png";


const Icon = new L.Icon({
    iconUrl: markerIcon,
    iconSize: [20, 30],
});

const MapUpdater = ({ position }) => {

    const safePosition = position ?? [27.7172, 85.3240];
    const map = useMap();

    useEffect(() => {
        map.flyTo(safePosition, 15, {
            duration: 1.5, // Smooth transition
        });
    }, [safePosition, map]);

    return null;
};

const CompanyMap = ({ position }) => {
    const safePosition = position ?? [27.7172, 85.3240];

    return (
        <MapContainer
            center={safePosition}
            zoom={15}
            style={{ height: "100%", width: "100%", borderRadius: "10px" }}
            scrollWheelZoom={false}
            zoomControl={false}
        >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={safePosition}
                icon={Icon}
            >
                <Popup>Our Office Location</Popup>
            </Marker>
            <MapUpdater position={safePosition} />
            <ZoomControl position="bottomright" />
        </MapContainer>
    )
}
export default CompanyMap;