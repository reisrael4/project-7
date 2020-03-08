import React from "react";
import "./Header.css";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header>
      <Toolbar className="toolbar">
        <Typography
          component="div"
          className='toolbarTitle'
        >
          Virgil
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
      </Toolbar>
      <Toolbar component="nav" variant="dense" className="toolbarSecondary">
        {" "}
        <div>Georgics</div>
        <div>Eclogues</div>
        <div>Aeneid</div>
        <div>Unaffiliated</div>
      </Toolbar>
    </header>
  );
}
export default Header;
