import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import "./Header.css";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "20px",
    paddingRight: theme.spacing(12),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },

  headerOptions: {
    display: "flex",
  },
  Button: {
    paddingRight: theme.spacing(12),
  },
}));

export default function MenuAppBar(props) {
  const { history } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMenuClick = (pageURL) => {
    history.push(pageURL);
    setAnchorEl(null);
  };
  const handleButtonClick = (pageURL) => {
    history.push(pageURL);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className="nav">
        <Toolbar className="nav">
          <Typography variant="h6" className={classes.title}>
            Stock Trades
          </Typography>
          <div>
            {isMobile ? (
              <>
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="menu"
                  onClick={handleMenu}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={() => handleMenuClick("/")}>Home</MenuItem>
                  <MenuItem onClick={() => handleMenuClick("news")}>
                    Stock News
                  </MenuItem>
                  <MenuItem onClick={() => handleMenuClick("/subscriptions")}>
                    Subscriptions
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <div className={classes.headerOptions}>
                <Button variant="contained" onClick={handleButtonClick}>
                  Home
                </Button>
                <Button variant="contained" onClick={handleButtonClick}>
                  Stock News
                </Button>
                <Button variant="contained" onClick={handleButtonClick}>
                  Subscriptions
                </Button>
              </div>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
