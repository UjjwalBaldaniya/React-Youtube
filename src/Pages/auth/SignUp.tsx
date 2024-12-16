import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  Button,
  InputLabel,
  SxProps,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as Yup from "yup";

import { signUp } from "../../api/services/authService";
import { IRegisterFormInputs } from "../../types/auth.type";

const formStyles: SxProps = {
  maxWidth: 500,
  margin: "0 auto",
  padding: 3,
  display: "flex",
  flexDirection: "column",
  gap: 2,
  border: "1px solid #ccc",
  borderRadius: 2,
  boxShadow: 1,
};

const registerFormSchema = Yup.object({
  fullName: Yup.string()
    .required("Full Name is required")
    .min(3, "Full Name must be at least 3 characters"),
  email: Yup.string()
    .required("Email is required")
    .email("Enter a valid email"),
  username: Yup.string()
    .required("Username is required")
    .min(3, "Username must be at least 3 characters"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[A-Z])(?=.*\d).{8,}$/,
      "Password must contain at least one uppercase letter and one number"
    ),
});

const SignUp: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterFormInputs>({
    resolver: yupResolver(registerFormSchema) as any, // eslint-disable-line @typescript-eslint/no-explicit-any,
  });

  const onSubmit: SubmitHandler<IRegisterFormInputs> = async (data) => {
    const formData = new FormData();
    formData.append("fullName", data.fullName);
    formData.append("email", data.email);
    formData.append("username", data.username);
    formData.append("password", data.password);
    if (data.avatar[0]) formData.append("avatar", data.avatar[0]);
    if (data.coverImage?.[0]) formData.append("coverImage", data.coverImage[0]);

    try {
      await signUp(formData);
    } catch (error) {
      toast.error("An unexpected error occurred:");
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={formStyles}>
      <Typography variant="h4" gutterBottom textAlign="center">
        Register
      </Typography>

      <TextField
        label="Full Name"
        {...register("fullName")}
        error={!!errors.fullName}
        helperText={errors.fullName?.message}
        fullWidth
      />

      <TextField
        label="Email"
        {...register("email")}
        error={!!errors.email}
        helperText={errors.email?.message}
        fullWidth
      />

      <TextField
        label="Username"
        {...register("username")}
        error={!!errors.username}
        helperText={errors.username?.message}
        fullWidth
      />

      <TextField
        label="Password"
        type="password"
        {...register("password")}
        error={!!errors.password}
        helperText={errors.password?.message}
        fullWidth
      />

      <Box>
        <InputLabel>Avatar</InputLabel>
        <TextField
          type="file"
          {...register("avatar")}
          inputProps={{ accept: "image/*" }}
          error={!!errors.avatar}
          helperText={errors.avatar?.message as string}
        />
      </Box>

      <Box>
        <InputLabel>Cover Image (Optional)</InputLabel>
        <TextField
          type="file"
          {...register("coverImage")}
          inputProps={{ accept: "image/*" }}
          error={!!errors.coverImage}
          helperText={errors.coverImage?.message as string}
        />
      </Box>

      <Button type="submit" variant="contained" color="primary">
        Register
      </Button>
    </Box>
  );
};

export default SignUp;
