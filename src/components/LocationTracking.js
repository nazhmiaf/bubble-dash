import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import useLocationData from "../hooks/useLocationData";
import { Loader2 } from "lucide-react";
import motor from "../assets/icon/anter.png"


const customIcon = new L.Icon({
  iconUrl: motor,
  iconSize: [32, 32],
});

const LocationTracking = () => {
  const { data: location, loading } = useLocationData();

  const formatTimestamp = (timestamp) => {
    if (!timestamp) return "-";
    const date = new Date(timestamp);
    return date.toLocaleString();
  };

  return (
    <div className="w-full h-[800px] rounded-2xl shadow-xl bg-white p-4">
      <h2 className="mb-4 text-xl font-semibold">Live Location Tracking</h2>

      {loading ? (
        <div className="flex justify-center items-center h-[700px]">
          <Loader2 className="w-10 h-10 text-gray-500 animate-spin" />
        </div>
      ) : location ? (
        <>
          <MapContainer
            center={[location.latitude, location.longitude]}
            zoom={16}
            style={{ height: "500px", width: "100%" }}
            scrollWheelZoom={true}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker
              position={[location.latitude, location.longitude]}
              icon={customIcon}
            >
              <Popup>Lokasi Saat Ini</Popup>
            </Marker>
          </MapContainer>

          <div className="p-4 mt-4 bg-gray-100 shadow-sm rounded-xl">
            <h3 className="mb-2 text-lg font-medium">Detail Lokasi</h3>
            <p>Latitude: <span className="font-semibold">{location.latitude}</span></p>
            <p>Longitude: <span className="font-semibold">{location.longitude}</span></p>
            <p>Update Terakhir: <span className="font-semibold">{formatTimestamp(location.timestamp)}</span></p>
          </div>
        </>
      ) : (
        <p className="text-center text-gray-600">Tidak ada data lokasi.</p>
      )}
    </div>
  );
};

export default LocationTracking;
