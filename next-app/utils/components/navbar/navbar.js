// "use client";
// import { links } from "../../data/links.js";
// import "./navbar.css";
// import { nanoid } from "nanoid";

// export default function Navbar() {
//   return (
//     <div className="container">
//       <ul className="link-list">
//         {links
//           .filter((item) => !item.excluded)
//           .map((link) => (
//             <NavItem key={nanoid()} link={link} />
//           ))}
//       </ul>
//     </div>
//   );
// }

// function NavItem({ link }) {
//   return (
//     <li className="list-item">
//       <a
//         className={`link ${
//           window.location.pathname === link.href && "current "
//         }`}
//         href={link.href}
//       >
//         {link.title}
//       </a>
//     </li>
//   );
// }

"use client";
import Link from "next/link";
import { links } from "@/utils/data/links";
import { usePathname } from "next/navigation";
import "./navbar.css";
import { nanoid } from "nanoid";

export default function Navbar() {
  // const [openLogin, setOpenLogin] = useState(false);
  // const [openRegister, setOpenRegister] = useState(false);
  // const { token, setToken } = useLoginContext();
  const pathname = usePathname();
  return (
    <nav className="container">
      <ul className="link-list">
        {links.map((link) => (
          <NavItem
            key={nanoid()}
            link={link}
            current={pathname === link.href}
          />
        ))}
      </ul>
      {/* {token ? (
        <button onClick={() => setToken(null)}>SignOut</button>
      ) : (
        <div className="row">
          <button onClick={() => setOpenRegister(true)} variant="outlined">
            Register
          </button>
          <Button onClick={() => setOpenLogin(true)} variant="outlined">
            Login
          </Button>
        </div>
      )} */}
      {/* {openLogin && <LoginModal setOpen={setOpenLogin} />}
      {openRegister && <RegistrationModal setOpen={setOpenRegister} />} */}
    </nav>
  );
}

function NavItem({ link, current }) {
  return (
    <li className="list-item">
      <Link className={`link ${current && "current"}`} href={link.href}>
        {link.title}
      </Link>
    </li>
  );
}
