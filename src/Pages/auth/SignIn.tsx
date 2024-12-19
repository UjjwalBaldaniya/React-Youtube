import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { signIn } from "../../api/services/authService";
import useRedirectAuthenticated from "../../hooks/useRedirectAuthenticated";
import { ILoginFormInputs } from "../../types/auth.type";

const SignIn: React.FC = () => {
  useRedirectAuthenticated();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormInputs>();

  const onSubmit: SubmitHandler<ILoginFormInputs> = async (data) => {
    try {
      await signIn(data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data || "Sign-in failed");
      } else {
        toast.error("An unexpected error occurred:");
      }
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        mx: "auto",
        mt: 5,
        p: 3,
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <Typography variant="h5" gutterBottom align="center">
        Login
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Enter Email or Username"
          fullWidth
          margin="normal"
          {...register("emailOrUsername", {
            required: "Email or Username is required",
          })}
          error={!!errors.emailOrUsername}
          helperText={errors.emailOrUsername?.message}
        />

        <TextField
          label="Password"
          fullWidth
          margin="normal"
          type="password"
          {...register("password", { required: "Password is required" })}
          error={!!errors.password}
          helperText={errors.password?.message}
        />

        <Box sx={{ mt: 2 }}>
          <Button type="submit" variant="contained" fullWidth>
            Log In
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default SignIn;
