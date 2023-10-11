
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AddHomeIcon from "@mui/icons-material/AddHome";
import PeopleIcon from "@mui/icons-material/People";
import AssignmentIcon from "@mui/icons-material/Assignment";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import InstituteForm from "./InstituteForm";
import { Route, Routes, useNavigate } from "react-router-dom";
import Studentsdashboard from "../Studentsdashboard";
import RegisterStudent from "../RegisterUser";
import StudentList from "../Institute_screen/StudentList";
import InstituteList from "./instituteList";
const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export default function Dashboard(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();
  const [pagesArr, setPagesArr] = React.useState([
    {
      name: "Dashboard",
      route: "admin-dashboard",
      icon: <AddHomeIcon />,
    },
    {
      name: "Students",
      route: "students",
      icon: <PeopleIcon />,
    },
    {
      name: "User Registration",
      route: "registerStudent",
      icon: <PeopleIcon />,
    },
    {
      name: "Institutes",
      route: "institutelist",
      icon: <CalendarTodayIcon />,
    },
    {
      name: "Institute Form",
      route: "instituteform",
      icon: <CalendarTodayIcon />,
      element: <InstituteForm />,
    },

    {
      name: "Notifications",
      route: "notifications",
      icon: <NotificationsIcon />,
    },
    {
      name: "Assignments",
      route: "assignments",
      icon: <AssignmentIcon />,
    },
  ]);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  let openPage = (route: any) => {
    navigate(`/admin-dashboard/${route}`);
  };
  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {pagesArr.map((x, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              onClick={() => {
                openPage(x.route);
              }}
            >
              <ListItemIcon>{x.icon ? x.icon : <MailIcon />}</ListItemIcon>
              <ListItemText primary={x.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        <Routes>
          <Route path="students" element={<StudentList />} />
          <Route path="instituteform" element={<InstituteForm />} />
          <Route path="registerStudent" element={<RegisterStudent />} />
          <Route path="institutelist" element={<InstituteList />} />
        </Routes>
      </Box>
    </Box>
  );
}
