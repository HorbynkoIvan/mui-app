import { Button, ButtonProps, styled } from "@mui/material";

export const ButtonOutlined = styled(Button)<ButtonProps>(({ theme }) => ({
  width: "116px",
  height: "32px",
  padding: 0,
  border: `1px solid ${theme.palette.grey[300]}`,
  borderRadius: "8px",
}));