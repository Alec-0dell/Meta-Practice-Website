import Intro1 from './Intro1';
import Intro2 from './Intro2';
import Intro3 from './Intro3';

const data = {
    PromotionDeal: "50% off",
    promotionText: "Buy Now!"
}
function Promo() {
    return (
        <div className="promo-section">
            <div>
                <h1>Don't miss this deal!</h1>
            </div>
            <Intro1 promotionDeal={data.PromotionDeal} promotionText={data.promotionText} /> 
            <Intro2/> 
            <Intro3/>
            <div>
                <h2>Subscribe to my newsletter and get all the shop items at 50% off!</h2>
            </div>
        </div>
     );
};

export default Promo;