import { SignUpOrInFlow, useSession, useUser } from '@descope/react-sdk';
import React from 'react';
import './App.css';

const App: React.FC<{baseUrl: string; projectId: string}> = (props) => {
	const { isAuthenticated, isSessionLoading } = useSession();
	const { user, isUserLoading } = useUser();


	if (isSessionLoading || isUserLoading) {
		return <div>Loading...</div>;
	}

	return isAuthenticated ? (
		<div>
			Hello {user?.name} from {document.location.hostname}
			<pre>{JSON.stringify({ user, props }, null, 2)}</pre>
		</div>
	) : (
		<SignUpOrInFlow />
	);
};

export default App;
