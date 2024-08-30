import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { COLORS, CustomSize } from "../../../themes";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import { useEffect, useRef, useState } from "react";

const ContactSection = () => {
  const { isMobile, isTablet } = CustomSize();
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  const [isDisabled, setIsDisabled] = useState(false);
  const [formData, setFormData] = useState({
    to_name: "",
    from_name: "",
    user_phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const timestamp = localStorage.getItem("formSubmitTime");
    if (timestamp) {
      const timePassed = Date.now() - parseInt(timestamp, 10);
      if (timePassed < 48 * 60 * 60 * 1000) {
        setIsDisabled(true);
      }
    }
  }, []);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      isDisabled ||
      !formData.to_name ||
      !formData.from_name ||
      !formData.message
    ) {
      toast.error("Please fill out all required fields.");
      return;
    }

    setIsLoading(true);

    if (form.current) {
      emailjs
        .sendForm(
          "service_7gx44sk",
          "template_qi0btfc",
          form.current,
          "KPbumh32Tf3ejQGhE"
        )
        .then(
          (result) => {
            toast.success(
              "Message sent successfully! I'll connect you shortly"
            );
            localStorage.setItem("formSubmitTime", Date.now().toString());
            setIsDisabled(true);
          },
          (error) => {
            console.error("EmailJS Error:", error.text || error);
            toast.error("Failed to send message, please try again.");
          }
        )
        .finally(() => {
          setIsLoading(false);
        });

      e.currentTarget.reset();
    }
  };

  return (
    <Container sx={{ mb: 5 }}>
      <ToastContainer />
      <Box
        sx={{
          backgroundColor: COLORS.WHITE,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          p: isMobile ? 1 : 5,
          minWidth: isMobile ? undefined : isTablet ? undefined : 800,
        }}
      >
        <Typography textAlign={"center"} variant={isMobile ? "h5" : "h3"}>
          Contact Me
        </Typography>
        <form ref={form} onSubmit={sendEmail}>
          <Grid container spacing={2} mt={5}>
            <Grid item xs={12} md={6} sm={12}>
              <TextField
                name="to_name"
                fullWidth
                placeholder="Full Name"
                required
                value={formData.to_name}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="from_name"
                type="email"
                fullWidth
                placeholder="Email"
                required
                value={formData.from_name}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="user_phone"
                fullWidth
                placeholder="Mobile No."
                value={formData.user_phone}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="subject"
                fullWidth
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="message"
                fullWidth
                placeholder="Message"
                multiline
                rows={4}
                required
                value={formData.message}
                onChange={handleInputChange}
              />
            </Grid>
          </Grid>
          <Box>
            <Button
              type="submit"
              sx={{
                backgroundColor: COLORS.PRIMARY,
                color: COLORS.BLACK,
                fontSize: isMobile ? 16 : 20,
                borderRadius: 12,
                pr: 4,
                pl: 4,
                mt: 3,
              }}
              disabled={isLoading || isDisabled}
            >
              Send <SendIcon />
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default ContactSection;
