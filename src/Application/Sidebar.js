import { Center, Divider, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [active, setactive] = useState("");
  return (
    <>
      <Link to="/shipping/dashboard">
        <Center
          onClick={() => setactive("dashboard")}
          className={`SidebarText ${active === "dashboard" && "active"}`}
        >
          <img
            className="imgIcon"
            src="https://img.icons8.com/external-creatype-filed-outline-colourcreatype/512/external-dashboard-basic-creatype-filed-outline-colourcreatype.png"
            alt="dashboard-layout"
          />
          <Text>Dashboard</Text>
        </Center>
      </Link>
      <Center>
        <Divider ml={2} mr={7} borderWidth="2px" />
      </Center>
      <Link to="/shipping/parcels">
        <Center
          onClick={() => setactive("parcles")}
          className={`SidebarText ${active === "parcles" && "active"}`}
          mt={4}
        >
          <img
            className="imgIcon"
            src="https://img.icons8.com/external-filled-outline-design-circle/64/external-Pallet-manufacturing-filled-outline-design-circle.png"
            alt="-1"
          />
          <Text>Parcels</Text>
        </Center>
      </Link>
      <Link to="/shipping/vehicles">
        <Center
          onClick={() => setactive("vehicles")}
          className={`SidebarText ${active === "vehicles" && "active"}`}
        >
          <img
            className="imgIcon"
            src="https://img.icons8.com/color/480/fleet.png"
            alt="external-vehicle-hotel-kiranshastry-gradient-kiranshastry"
          />
          <Text my={5}>Vehicles</Text>
        </Center>
      </Link>
      <Link to="/shipping/">
        <Center
          onClick={() => setactive("Loadpackage")}
          className={`SidebarText ${active === "Loadpackage" && "active"}`}
        >
          <img
            className="imgIcon"
            src="https://img.icons8.com/external-smashingstocks-isometric-smashing-stocks/55/external-Parcels-delivery-services-logistics-smashingstocks-isometric-smashing-stocks-10.png"
            alt="sldjf"
          />
          <Text>Load Packages</Text>
        </Center>
      </Link>
    </>
  );
};

export default Sidebar;
