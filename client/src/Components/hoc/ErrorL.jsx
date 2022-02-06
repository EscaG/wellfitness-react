import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

export default function ErrorL() {
	const location = useLocation();

	return <Navigate to='/404' state={{ from: location }} />;
}
