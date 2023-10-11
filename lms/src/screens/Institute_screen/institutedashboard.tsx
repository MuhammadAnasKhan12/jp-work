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
import Studentsdashboard from "../Studentsdashboard";
import { Route, Routes, useNavigate } from "react-router-dom";
import RegisterStudent from "../RegisterUser";
import CourseList from "./CourseList";
import CourseForm from "./CourseForm";
import StudentList from "./StudentList";
import Studentdetail from "./Studentdetail";
import StudentForm from "./StudentForm";
import AddQuiz from "./AddQuiz";
const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export default function Institutedashboard(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();
  const [pagesArr, setPagesArr] = React.useState([
    {
      name: "instituteDashboard",
      route: "",
      icon: <AddHomeIcon />,
    },
    {
      name: "Course List",
      route: "courselist",
      icon: <PeopleIcon />,
    },
    {
      name: "Course form",
      route: "courseform",
      icon: <PeopleIcon />,
    },

    {
      name: "Student List",
      route: "studentlist",
      icon: <CalendarTodayIcon />,
    },

    {
      name: "Student Detail",
      route: "studentdetail",
      icon: <NotificationsIcon />,
    },{
      name: "Add Quiz",
      route: "addquiz",
      icon: <NotificationsIcon />,
    },
    
  ]);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  let openPage = (route: any) => {
    navigate(`/institute-dashboard/${route}`);
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
            Institute-Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
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
          <Route path="courselist" element={<CourseList />} />
          <Route path="courseform" element={<CourseForm />} />
          <Route path="studentlist" element={<StudentList />} />
          <Route path="studentdetail" element={<Studentdetail />} />
          <Route path="studentform" element={<StudentForm />} />
          <Route path="addquiz" element={<AddQuiz/>} />

        </Routes>
      </Box>
    </Box>
  );
}
