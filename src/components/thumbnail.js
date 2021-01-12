const Thumbnail = ({
    src
}) => (
    <picture className="thumbnail">
        <img src={src} />
    </picture>
)

export default Thumbnail;