import Link from "next/link";

export default function Header() {
  return (
    <>
    <div className="header">
        <ul className="header-buttons">

          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact-us">Contact Us</Link>
          </li>
        </ul>

        
    </div>

    </>
  );
}