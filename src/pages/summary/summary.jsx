export const Summary = (props) => {
    const {name, adress, rating, price} = props;
    return (
        <div className="summary__booking">
            <h2>Booking Summary</h2>
            <div className="summary__head">
                <img
                className="summary__photo"
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=960"
                />
                <div className="summary__head-property">
                    <h3 className="summary__name">{name}</h3>
                    <div className="summary__adress">{adress}</div>
                    <div className="summary__city">Malohradská ves</div>
                    <div className="summary__rating">{rating}</div>
                </div>
                <div className="summary__head-room">
                    <h3 className="summary__name">Pokoj 2</h3>
                    <div className="summary__room-type">Dvoulůžkový s dětskou přistýlkou</div>
                    <div className="summary__room-price">{price}</div>
                </div>
            </div>
        </div>
    );
}    