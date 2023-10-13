import { AuthProvider } from '@descope/react-sdk';
import React, { useEffect, useState } from 'react';
import './App.css';
import Site from './Site';

const App: React.FC = () => {
	const [baseUrl, setBaseUrl] = useState('');

	useEffect(() => {
		setBaseUrl(`${window.location.protocol}//auth.${window.location.hostname}`);
	}, []);

	return (
		baseUrl && (
			<AuthProvider
				projectId={process.env.REACT_APP_DESCOPE_PROJECT_ID ?? ''}
				baseUrl={baseUrl}
			>
				<div>
					<h1>Base URL is {baseUrl}</h1>
					<Site />
				</div>
			</AuthProvider>
		)
	);
};

export default App;
