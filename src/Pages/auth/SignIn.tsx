import { Box, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { signIn } from "../../api/services/authService";
import CustomButton from "../../components/CustomButton";
import InputField from "../../components/InputField";
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
        mt: 10,
        p: 3,
        border: "1px solid #2f2f2f",
        borderRadius: 2,
        boxShadow: 1,
      }}
    >
      <Typography variant="h5" gutterBottom align="center">
        Login
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          label="Enter Email or Username"
          name="emailOrUsername"
          type="text"
          fullWidth
          margin="normal"
          register={register}
          error={!!errors.emailOrUsername}
          helperText={errors.emailOrUsername?.message}
        />
        <InputField
          label="Password"
          name="password"
          type="password"
          fullWidth
          margin="normal"
          register={register}
          error={!!errors.password}
          helperText={errors.password?.message}
        />

        <Box sx={{ mt: 2 }}>
          <CustomButton type="submit" variant="contained" fullWidth>
            Log In
          </CustomButton>
        </Box>
      </form>
    </Box>
  );
};

export default SignIn;
