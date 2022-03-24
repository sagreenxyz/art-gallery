function Gallery(props) {
    return (
        <div>
            <img style={{ 'width': '500px' }}
                src={props.objectImg}
                alt={props.title}
            />
            <p>{props.artist}</p>
        </div>
    )
}

export default Gallery