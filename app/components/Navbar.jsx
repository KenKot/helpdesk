import Link from "next/link";
import Image from "next/image";
import Logo from "./ninja-logo.png";
import LogoutButton from "./LogoutButton";

export default function Navbar({ user }) {
  return (
    <nav>
      <Image
        src={Logo}
        alt="Ninja Helpdesk logo"
        width={70}
        placeholder="blur"
        quality={100}
      />
      <Link href="/">
        <h1>Dojo Helpdesk</h1>
      </Link>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets" className="mr-auto">
        Tickets
      </Link>
      {user && <span>Hello, {user.email}</span>}
      <LogoutButton />
    </nav>
  );
}
