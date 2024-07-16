import Logo from "./logo";
import Nav from "./nav";
import { FC } from "react";

const Header: FC = () => {
  return (
    <header className="flex justify-center items-center">
      <div className="container flex flex-row justify-between items-center w-max">
        <Logo isBoxStyle />
        <Nav />
      </div>
    </header>
  );
};
export default Header;
