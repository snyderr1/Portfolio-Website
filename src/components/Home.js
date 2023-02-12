import GitIcon from '../assets/git.png';
import EmailIcon from '../assets/email.svg';

function Home(props) {
    //def is the name of the content, so that the css can be properly applied
    //for different pages and content types
    return (
        <div className="Home">
            <div className="page-window">
                <div className="home-text">
                    <img className="portrait" src={props.profile} alt={props.alt}></img>
                    <p className="home-top-blurb">Welcome! My name is Ross Snyder, and this is my website. I recieved my degree in Computer Science Systems
                        in 2021 from Oregon State University. </p>
                    <p className="home-bottom-blurb">Text</p>
                    <div className="home-links">
                        <ImgLink name="git" src={GitIcon} link="https://github.com/snyderr1/" linkText="https://github.com/snyderr1" />
                        <ImgLink name="email" src={EmailIcon} link="rossesny@gmail.com" linkText="rossesny@gmail.com" />
                    </div>
                    {/* <a className="git-link" href="https://github.com/snyderr1/">GitHub: https://github.com/snyderr1</a> */}
                    {/* <a className="email-link" href="rossesny@gmail.com">Email: rossesny@gmail.com</a> */}
                </div>
            </div>
        </div>
    );
}

function ImgLink(props) {
    return (
        <div className="imgLink-container">
            <img className="linkImg" src={props.src} alt={props.alt}></img>
            <a className={props.name} href={props.link}>{props.linkText}</a>
        </div>
    );
}

export default Home;