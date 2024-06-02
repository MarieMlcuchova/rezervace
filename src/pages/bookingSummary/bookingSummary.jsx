import { Summary } from "../summary/summary"
import { Detail } from "../detail/detail"
import { Services } from "../services/services"
import { Cancel } from "../cancel/cancel"


export const BookingSummary = () => {
    return (
        <div className="summary">
            <Summary name="Hotel Lesní Zátiší" adress="Malohradské skály 347/21" rating="4.65" price="1 800 Kč / noc"/>
            <Detail checkIn="13.6.2023 do 18:00" checkOut="17.6.2026 do 10:00"/>
            <Services parkingPrice="200 Kč / noc" breakfastPrice="150 Kč / noc"/>
            <Cancel cancelPeriod="14"/>
        </div>
    );
};