import ReactPlayer from "react-player";


function Intro2() {
    const vidUrl = "https://www.youtube.com/watch?v=VEJ8lpCQbyw"
    return (
        <div className="blog-post-intro">
            <h2>Why I love front-end web development</h2>
            <div>
                <ReactPlayer
                    url={vidUrl}
                    playing={false}
                    volume={0.5}
                />
            </div>
        </div>
    );
};

export default Intro2;