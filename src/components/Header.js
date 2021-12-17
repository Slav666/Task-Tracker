import Button from "./button";

const Header = ({ title, onAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button onAdd={onAdd} />
    </header>
  );
};

export default Header;
