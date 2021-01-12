const Thumbnail = ({
    src,
    larger
}) => (
    <picture className={`thumbnail ${larger?'larger':''}`}>
        <img src={src} alt="" />
    </picture>
)

export default Thumbnail;