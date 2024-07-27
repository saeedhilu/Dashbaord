import { IoIosNotificationsOutline } from "react-icons/io";
import "../style/Navbar.css";
const Navbar = () => {
  const navItems = [
    { text: "Dashboard" },
    { text: "insight" },
    { text: "Training" },
    { text: "Rehab" },
    { text: "Nutrition" },
  ];

  return (
    <div className="nav">
      <div className="it">
        <h1>Ski.ai</h1>
      </div>
      <div className="nav-item">
        {navItems.map((value, index) => (
          <div key={index}>
            <p href="#" key={value.id}>
              {value.text}
            </p>
          </div>
        ))}
        <div style={{ display: "flex", margin: "20px",gap:'20px' }}>
          <div>
            <IoIosNotificationsOutline />
          </div>
          <div>
            <img
              className="img"
              src="https://s3-alpha-sig.figma.com/img/0caf/d786/c2bfae227de0052dc027118685f5e054?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nvo~0KzNQKff7QAgYoy2yqXReOX1l3d9-xEPmnXCRz7TQcVRxG3mrUgi6a7mdIdLwh7iZvNWLmQWp1OR2EVNdIA-546-GEsdF8uGGheTSxqWNnXG34GAYVjZltzdJLyJu3Gg3dtKEUzuf9sfzuigyxl1PSyD6vYBtJfSROkNr55I0TX3fh8uZg9de7ACgJkWaG1BPvhMaI4u9-iBssCb1iuwG2KwdVW9NzDj4ozngUmdLauoY3d9tRi~7EWP9J8pZQBCsYsrW0N7Gm7--DgIjO9dCeXrHsBmycxOIgSVjCVTOvBy5WVQb6ejHUrcZSbvf8yhFRCU3VQsFYrt8Ti9Xw__"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
