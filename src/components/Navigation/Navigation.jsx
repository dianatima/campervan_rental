import { NavItem } from "./Navigation.styled";
import { Link } from "react-router-dom";

export const Navigation = () => {

  return (
    <>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/catalog">Catalog</NavItem>
      <NavItem to="/favorites">Favorites</NavItem>
    </>
  );
};
