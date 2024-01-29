import Select from "react-select";
import Controls from "../Controls";
import TrackImage from "../TrackImage";
import { ITrack } from "../../types";
import {ControlContainer}  from "./styles";

interface IProps {
    playlists: Array<string>;
    getTracks: any;
    token: string | null;
    tracks: Array<string>;
    track: ITrack;
    setTrack: React.Dispatch<React.SetStateAction<ITrack | null>>;
}


const Sidebar:React.FC<IProps> = ({ playlists, getTracks, token, tracks, track, setTrack }) => {

const styles = {
    menuList: (styles:any) => {
    return {
        ...styles,
        maxHeight: "25vh"
    };
    },
    option: (styles:any, {isFocused}: {isFocused:any} ) => {
        return {
            ...styles,
            backgroundColor: isFocused ? "#999" : null,
            color: "#333"
        }
    }
}

    const handleChange = (event:any) => {
        getTracks(event.id);
    }

    return (
        <>
        <ControlContainer>
        <Controls
        token={token}
        tracks={tracks}
        setTrack={setTrack}
        />
        <Select 
        menuPlacement="auto"
        options={playlists}
        getOptionLabel={(e:any) => e.name}
        styles={styles}
        onChange={handleChange}
        theme={(theme) => ({
            ...theme,
            borderRadius: 0,
            colors: {
                ...theme.colors,

            }

        })}
        />
        <TrackImage track={track} />
        </ControlContainer>
       
        </>
    )
}

export default Sidebar;