import Link from "next/link";
import Image from "next/image";
import Logo from "./ninja-logo.png";

export default function Navbar() {
  return (
    <nav>
      <Image
        src={Logo}
        alt="Ninja Helpdesk logo"
        width={70}
        placeholder="blur"
        quality={100}
      />
      <h1>Dojo Helpdesk</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  );
}
