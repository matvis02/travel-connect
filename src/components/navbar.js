import { useState } from "react"
import {
  Badge,
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material"
import NotificationsIcon from "@mui/icons-material/Notifications"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [selectedMessage, setSelectedMessage] = useState(null)
  const messages = [
    "Hello, this is message 1",
    "This is message 2",
    "And this is message 3",
  ]
  return (
    <>
      <Box
        sx={{
          height: 60,
          backgroundColor: "primary.main",
          display: "flex",
          alignItems: "center",
          gap: "20px",
          px: 2,
        }}
      >
        <Button
          variant="text"
          sx={{ color: "white", fontSize: 18, w: 30 }} //textTransform: "none"
        >
          Home
        </Button>
        <Button variant="text" sx={{ color: "white", fontSize: 18, w: 30 }}>
          Events
        </Button>
        <Button variant="text" sx={{ color: "white", fontSize: 18, w: 30 }}>
          My Account
        </Button>

        <Badge
          color="secondary"
          variant="dot"
          sx={{
            color: "white",
            ml: "auto",
            cursor: "pointer",
          }}
        >
          <NotificationsIcon onClick={() => setOpen(!open)}></NotificationsIcon>
        </Badge>
      </Box>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        // PaperProps={{
        //   style: {
        //     backgroundColor: "transparent",
        //     boxShadow: "none",
        //   },
        // }}
      >
        <DialogContent>
          {messages.map((message, index) => (
            <p
              key={index}
              // onClick={() => handleSelectMessage(index)}
            >
              {message}
            </p>
          ))}
        </DialogContent>
      </Dialog>
    </>
  )
}
