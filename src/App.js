import { useEffect, useState } from 'react'; 
import Axios from 'axios'; 
import Map from './components/Map'; 
import './App.css'; 

function App() { 
	// State variables
	const [ipDetails, setIpDetails] = useState(null); // Start with null instead of empty array
	const [lat, setLat] = useState(0);
	const [lon, setLon] = useState(0);
	const [loading, setLoading] = useState(true); // Loading state
	const [error, setError] = useState(null); // Error state

	// Fetching the API once when the component is mounted
	useEffect(() => { 
		Axios.get('https://ipapi.co/json/')
			.then((res) => {
				const { latitude, longitude, ip, city, region, country_name, org } = res.data;
				setIpDetails({ ip, city, region, country_name, org });
				setLat(latitude);
				setLon(longitude);
			})
			.catch((err) => {
				setError('Unable to fetch IP details. Please try again later.');
			})
			.finally(() => {
				setLoading(false); // Stop loading after API call finishes
			});
	}, []);

	// Render loading or error states if needed
	if (loading) {
		return <div className="loading">Loading...</div>;
	}

	if (error) {
		return <div className="error">{error}</div>;
	}

	// Destructure the ipDetails for easy access
	const { ip, city, region, country_name, org } = ipDetails || {};

	return ( 
		<> 
			<h1 className="heading">IP Address Finder</h1> 
			<div className="App"> 
				<div className="left"> 
					<h4>What is my IPv4 address?</h4> 
					<h1 id="ip">{ip}</h1> 
					<h4>Approximate location: </h4> 
					<p>{city}, {region}, {country_name}</p>

					<h4>Internet Service Provider (ISP):</h4> 
					<p>{org}</p> 
				</div> 
				<Map lat={lat} lon={lon} /> 
			</div> 
		</> 
	); 
}

export default App;
