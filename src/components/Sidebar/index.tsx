import Select from "react-select";

interface IProps {
    playlists: Array<string>;
    getTracks: any;

}


const Sidebar:React.FC<IProps> = ({ playlists, getTracks }) => {

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
        <Select 
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
    )
}

export default Sidebar;