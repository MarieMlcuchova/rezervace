export const Detail = (props) => {
    const { checkIn, checkOut } = props;
    return (
        <div className="summary__detail">
            <h3>Detail rezervace</h3>
            <div className="summary__number">Číslo: 459787-745</div>
            <div className="summary__dates">Pobyt: 13.6.2023 - 17.6.2026</div>
            <div className="summary__guests">Hosté: 2 dospělí, 1 dítě</div>
            <div className="summary__services">Stravovávní: žádné</div>
            <div className="summary__room-total">7 200 Kč</div>
            <div className="summary__check-in">Check-in: {checkIn}</div>
            <div className="summary__check-out">Check-out: {checkOut}</div>
        </div>
    )
}