import React from 'react';
import { Marker } from '@react-google-maps/api';
import geo from './geo.png';
export default function MyMarker({ position }) {
	return <Marker position={position} icon={{ url: geo }} />;
}
