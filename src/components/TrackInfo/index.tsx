interface IProps{
    displayName?: string | null;
}

const TrackInfo:React.FC<IProps> = ({displayName}) => {
    return (
            <h1>Hello {displayName}</h1>
    )
}

export default TrackInfo;