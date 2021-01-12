const Thumbnail = ({
    src
}) => (
    <picture className="thumbnail">
        <img src={src} alt="" />
    </picture>
)

export default Thumbnail;