export const Services = (props) => {
    const {parkingPrice, breakfastPrice} = props;
    return (
        <div className="summary__services">
            <h3>Doplňkové služby</h3>
            <div className="summary__service">Parkování: {parkingPrice}</div>
            <div className="summary__service">Snídaně: {breakfastPrice}</div>
            <div className="summary__service">Wellness: Zdarma</div>
            <div className="summary__service">Wifi: Zdarma na všech pokojích</div>
        </div>
    )
}