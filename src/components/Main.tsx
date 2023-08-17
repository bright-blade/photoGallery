import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PhotoGallery from "./PhotoGallery";
import Aside from "./PhotoForm";
import PlusOneIcon from "@mui/icons-material/PlusOne";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { checkedPhotosActions } from "../store/checkedPhotos";
import { photoActions } from "../store/photos";

const drawerWidth = 240;

interface Props {
  window?: () => Window;
}

export default function Main(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const checkedPhotoList = useAppSelector((state) => state.checkedPhotos);
  const PhotoList = useAppSelector((state) => state.photos);
  const dispatch = useAppDispatch();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleDeletePhotos = () => {
    const filteredPhotos = PhotoList.filter(
      (photo) => !checkedPhotoList.includes(photo.id)
    );
    dispatch(photoActions.updatePhotoList(filteredPhotos));
    dispatch(checkedPhotosActions.reset());
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <Aside />
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
          <div className="w-screen flex justify-between items-center">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <PlusOneIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Your Photos Gallery
            </Typography>
            {checkedPhotoList.length > 0 && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDeletePhotos}
                sx={{ mr: 2 }}
              >
                <DeleteForeverIcon />
              </IconButton>
            )}
          </div>
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

        <PhotoGallery />
      </Box>
    </Box>
  );
}
