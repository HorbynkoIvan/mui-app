import { Typography, Stack } from "@mui/material";
import { palette } from "theme/palette";
import { Link } from "react-router-dom";
import { ForgotPasswordForm } from "features/auth";
import { typography } from "../theme/typography";

export const ForgotPassword = (): JSX.Element => (
  <Stack sx={{ height: "100%" }}>
    <Typography variant="h6" component="h6" fontWeight={typography.fontWeightExtraBold}>
      Forgot your password?
    </Typography>
    <Typography variant="subtitle2" color={palette.grey[500]} sx={{ mb: "48px" }}>
      {"Enter your email address below and we'll send you a link to reset your password."}
    </Typography>

    <ForgotPasswordForm />

    <Typography
      align="center"
      variant="subtitle2"
      color={palette.grey[600]}
      sx={{ mt: "auto", mb: "40px" }}>
      Already registered?{" "}
      <Typography variant="subtitle2" color={palette.red.main} component={Link} to="/login">
        Log in
      </Typography>
    </Typography>
  </Stack>
);
