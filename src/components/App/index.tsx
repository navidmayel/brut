import { useEffect, useState } from "react";
import Login from "../Login"
import Nav from "../Nav";
import TrackInfo from "../TrackInfo";
import Sidebar from "../Sidebar";
import { getAccessToken } from "../../auth";
import axios from "axios";
import { GlobalStyle } from "../../styles";
import { Container, TrackViewer, Side } from "./styles";
import { ITrack } from "../../types";

function App() {

	const GlobalStyleProxy:any = GlobalStyle;

	const [token, setToken] = useState<string | null>(null);
	const [profile, setProfile] = useState<string | null>(null);
	const [playlists, setPlaylists] = useState([]);
	const [tracks, setTracks] = useState<Array<string> | null>(null);
	const [track, setTrack] = useState<ITrack>();
	const [displayName, setDisplayName] = useState<string | null>(null);
	
	const clientId = import.meta.env.VITE_CLIENT_ID;
	const params = new URLSearchParams(window.location.search);
	const code = params.get("code");

	useEffect(() => {
		if (code && !token) {
			getToken();
			
		}
		if (token) {
			getUserInfo();
			getPlaylist();
		}

	}, [token])

	const getToken = async () => {
		if (code) {
			const acccessToken = await getAccessToken(clientId, code);
			setToken(acccessToken);
		}
	}

	const getUserInfo = async () => {
		const { data } = await axios.get("https://api.spotify.com/v1/me" , {
			headers: {
				Authorization: `Bearer ${token}`,
				"Content-type": "application/json"
			},
		}) 
		setDisplayName(data.display_name)
		setProfile(data.images[1].url);
	}

	const getPlaylist = async () => {
		const { data } = await axios.get("https://api.spotify.com/v1/me/playlists" , {
			headers: {
				Authorization: `Bearer ${token}`,
				"Content-type": "application/json"
			},
		}) 
		const playlists = data.items.map(({name, id, description}: {name: string, id: number, description:string}) => {
			return {name, id, description};
		})

		setPlaylists(playlists);
	}

	const getTracks = async (id:string) => {
		const { data } = await axios.get(`https://api.spotify.com/v1/playlists/${id}/tracks` , {
			headers: {
				Authorization: `Bearer ${token}`,
				"Content-type": "application/json"
			},
		}) 
		console.log(Object.entries(data.items))
		const uris = Object.entries(data.items).map(([key, value]) => value.track.uri);
		setTracks(uris);
	}



	if (!token) {
    return (
      <>
	  	<GlobalStyleProxy />
        <Login></Login>
      </>
    )
  } else {
	return (
		<>
		<GlobalStyleProxy />
		<Nav profile={profile}></Nav>
		<Container>
		<TrackViewer>
		<TrackInfo 
		displayName={displayName} 
		track={track} />
		</TrackViewer>
		<Side>
			<Sidebar 
			track={track}
			token={token}
			tracks={tracks}
			playlists={playlists} 
			getTracks={getTracks}
			setTrack={setTrack}
			/>
			</Side>
		</Container>
		</>
	)	
 
  }

  
}

export default App
