import { useEffect, useState } from "react";
import Login from "../Login"
import TrackInfo from "../TrackInfo";
import { getAccessToken } from "../../auth";

function App() {
	const [token, setToken] = useState<string | null>(null);

	useEffect(() => {
		getToken();
	}, [])

	const getToken = async () => {
		const clientId = import.meta.env.VITE_CLIENT_ID;
		const params = new URLSearchParams(window.location.search);
		const code = params.get("code");
	
		if (code) {
			const acccessToken = await getAccessToken(clientId, code);
			setToken(acccessToken);
		}
	}

	if (!token) {
    return (
      <>
        <Login></Login>
      </>
    )
  } else {
	return (
		<TrackInfo></TrackInfo>
	)	
 
  }

  
}

export default App
