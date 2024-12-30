


function SingleService(props) {

    const { name, description } = props;

    return ( 
        <div className="single-service">
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
     );
}

export default SingleService;