import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="hero-sec">
      <div className="hero-msg">
        <h1><b>Discover Informative <br />Blogs of Tech World</b></h1>
      </div>

      <div className="hero-img"></div>
    </div>

      <div className="about-sec">
      <div className="text">
        <h1>Here are some interesting Blogs!</h1>
      </div>
        <div className="first-boxes">
          <div className="box-content bounce-in-right" id="box1">
            <div className="imageContainer01"></div>
            <h1 className="title">Getting Started with Web Development in 2024
            </h1>
            
            <p className="description">
              <h3>Key concepts :</h3>
              Frontend vs Backend <br /> 
              HTML, CSS, JavaScript <br />
              Version Control with Git <br />
            </p>
              <Link href="/intro-web-development" className="readMore"> Read more </Link>
          </div>

        <div className="box-content bounce-in-right" id="box2">
          <div className="imageContainer02"></div>
          <h1 className="title">Mastering HTML & CSS: The Foundation of Web Pages
          </h1>
          <p className="description">
            <h3>Key concepts :</h3>
            Selectors: Target HTML elements <br />
            Properties and Values: Define how elements should be styled <br />
          </p>
          <Link href="/mastering-html-css" className="readMore"> Read more </Link>

        </div>

        <div className="box-content bounce-in-right" id="box3">
          <div className="imageContainer03"></div>
          <h1 className="title">Introduction to JavaScript: Bringing Interactivity to Websites</h1>
          <p className="description">
          <h3>Key techniques:</h3>
          Interactivity <br />
          Dynamic Content <br />
          Form Validation <br />
          </p>
          <Link href="/intro-js" className="readMore"> Read more </Link>
        </div> 
      </div>

      <div className="other-boxes">
        <div className="box-content bounce-in-right" id="box4">
          <div className="imageContainer04"></div>
          <h1 className="title">Exploring Frontend Frameworks: Why Next.js is a Game Changer</h1>
          <p className="description">
          <h3>Key features:</h3>
          Server-Side Rendering (SSR) <br />
          Static Site Generation (SSG) <br />
          API Routes <br />
          </p>
          <Link href="/exploring-next.js" className="readMore"> Read more </Link>
        </div>

        <div className="box-content bounce-in-right" id="box5">
          <div className="imageContainer05"></div>
          <h1 className="title">Building Responsive Websites: Adapting to All Devices
          </h1>
          <p className="description">
          <h3>Key techniques:</h3>
          Fluid Grid Layouts <br /> 
          Media Queries<br />
          Flexible Images<br /> 
          </p>
          <Link href="/responsive-website" className="readMore"> Read more </Link>
        </div>

        <div className="box-content bounce-in-right" id="box6">
          <div className="imageContainer06"></div>
          <h1 className="title">The Future of Web Development: Tools and Trends for 2024
          </h1>
          <p className="description">
          <h3>Important tools to learn:</h3>
          Version Control <br />
          Package Managers <br />
          Design Tools <br />
          </p>
          <Link href="/future-web-dev" className="readMore"> Read more </Link> 
        </div>
      </div>
    </div>
      
    </> 
  );
}