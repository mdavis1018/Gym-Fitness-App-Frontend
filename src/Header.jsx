import { LogoutLink } from "./Logout";

export function Header() {
  return (
    <header>
      <nav>
        <a href="http://localhost:5173/profile">Your Profile</a> | <a href="">Link</a>
      </nav>
      <LogoutLink />
    </header>
  );
}
