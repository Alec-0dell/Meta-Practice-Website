function Intro1(props) {
    return (
            <div className="blog-post-intro">
                <h2>{props.promotionText}</h2>
                <div>
                    <p>{props.promotionDeal}</p>
                    <p className="link">Read more...</p>
                </div>
            </div>
        );
    };
    
    export default Intro1;
