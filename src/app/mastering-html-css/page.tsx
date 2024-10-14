export default function MasteringHtmlCss() {
    return (
      <div className="blog2">
        <h1 className="mx-10 p-7 font-extrabold text-4xl text-slate-600  font-serif">Introduction</h1>
        <p className="mx-14 font-bold ">
          In our previous post, we introduced the basics of web development. Now, lets dive deeper into HTML (Hypertext Markup Language) and CSS (Cascading Style Sheets) <br />—the building blocks of every website. Understanding how to structure your content with HTML and style it with CSS is essential for any web developer.
        </p>

        <p className="mx-14 my-10 font-bold">
        <b className="text-slate-500 text-xl font-serif">HTML: </b> The Structure of a Web Page <br />
        HTML is the backbone of any webpage. It provides the structure and organization of your content using elements like headings, paragraphs, images, links, and more. <br /> <br />
        Key Elements: <br /> <br />
        <b className="text-pink-700 text-lg">DoctypeDeclaration: </b> Defines the HTML version (e.g., !DOCTYPE html). <br /> <br />
        <b className="text-pink-700 text-lg">Elements: </b> Tags like {"<h1>, <p>, <a>, and <img>"} are used to create the webpage structure. <br /><br />
        <b className="text-pink-700 text-lg">Attributes: </b> Provide additional information about elements (e.g., src for images, href for links). <br /> <br /> <br />

        <b className="text-slate-500 text-xl font-serif">CSS: </b> The Styling of Web Pages <br />
        CSS enhances the visual presentation of your website. It allows you to style your HTML elements and control layout, colors, fonts, and more. <br /> <br />
        
        Key Concepts: <br /> <br />
        <b className="text-pink-700 text-lg">Selectors: </b> Target HTML elements (e.g., h1, .class, #id). <br /> <br />
        <b className="text-pink-700 text-lg">Properties and Values: </b>Define how elements should be styled (e.g., color: blue;, font-size: 16px;). <br /> <br /> <br />

        <b className="text-slate-500 text-xl font-serif">Responsive Design with CSS: </b> <br /> <br />
        With more users accessing the web via mobile devices, creating a responsive design is essential. <br /> Use CSS media queries to adjust your styles based on screen size.

        </p>  <br /> <br /> <br />

      </div>

    );
  }