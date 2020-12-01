import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { withRouter } from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  menuItem: {
    padding: "30px",
  },
}));

const Header = (props) => {
  console.log(props);
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
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Stock Trades
          </Typography>

          <div className="nav__bar">
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
                  onClose={() => setAnchorEl(null)}
                >
                  <MenuItem
                    className={classes.menuItem}
                    onClick={() => handleMenuClick("/")}
                  >
                    Home
                  </MenuItem>
                  <MenuItem
                    className={classes.menuItem}
                    onClick={() => handleMenuClick("news")}
                  >
                    Stock News
                  </MenuItem>
                  <MenuItem
                    className={classes.menuItem}
                    onClick={() => handleMenuClick("/subscriptions")}
                  >
                    Subscriptions
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <div className={classes.headerOptions}>
                <Button
                  variant="contained"
                  onClick={() => handleButtonClick("")}
                >
                  Home
                </Button>
                <Button
                  variant="contained"
                  onClick={() => handleButtonClick("news")}
                >
                  Stock News
                </Button>
                <Button
                  variant="contained"
                  onClick={() => handleButtonClick("subscriptions")}
                >
                  Subscriptions
                </Button>
              </div>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default withRouter(Header);
