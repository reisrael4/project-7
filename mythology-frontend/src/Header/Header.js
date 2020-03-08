import React from "react";
import "./Header.css";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";
import "typeface-roboto";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header>
      <Toolbar className="toolbar">
        <Typography component="h2" variant="h2" className="toolbarTitle">
          Virgil
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
      </Toolbar>
      <Toolbar component="nav" variant="dense" className="toolbarSecondary">
        {" "}
        <Link to="/list/work/georgics">Georgics</Link>
        <Link to="/list/work/eclogues">Eclogues</Link>
        <Link to="/list/work/aeneid">Aeneid</Link>
        <Link to="/list/work/unaffiliated">Unaffiliated</Link>
      </Toolbar>
    </header>
  );
}
export default Header;
