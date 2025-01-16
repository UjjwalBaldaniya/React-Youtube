import { yupResolver } from "@hookform/resolvers/yup";
import { Box, InputLabel, SxProps, TextField, Typography } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as Yup from "yup";

import { createVideoService } from "../api/services/createVideoService";
import CustomButton from "../components/CustomButton";
import InputField from "../components/InputField";
import { ICreateVideoInputs } from "../types/createVideo.types";

const formStyles: SxProps = {
  maxWidth: 500,
  margin: "0 auto",
  padding: 3,
  display: "flex",
  flexDirection: "column",
  gap: 2,
  border: "1px solid #2f2f2f",
  borderRadius: 2,
  boxShadow: 1,
};

const registerFormSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
});

const CreateVideo: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateVideoInputs>({
    resolver: yupResolver(registerFormSchema) as any, // eslint-disable-line @typescript-eslint/no-explicit-any,
  });

  const onSubmit: SubmitHandler<ICreateVideoInputs> = async (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    if (data?.videoFile?.[0]) formData.append("videoFile", data.videoFile[0]);
    if (data?.thumbnail?.[0]) formData.append("thumbnail", data.thumbnail[0]);

    try {
      await createVideoService(formData);
    } catch (error) {
      toast.error("An unexpected error occurred:");
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={formStyles}>
      <Typography variant="h4" gutterBottom textAlign="center">
        Create Video
      </Typography>

      <InputField
        label="Title"
        name="title"
        type="text"
        fullWidth
        margin="normal"
        register={register}
        error={!!errors.title}
        helperText={errors.title?.message}
      />

      <InputField
        label="Description"
        name="description"
        type="text"
        fullWidth
        margin="normal"
        register={register}
        error={!!errors.description}
        helperText={errors.description?.message}
      />

      <Box>
        <InputLabel>Upload Video</InputLabel>
        <TextField
          type="file"
          {...register("videoFile")}
          inputProps={{ accept: "video/*" }}
          error={!!errors.videoFile}
          helperText={errors.videoFile?.message as string}
        />
      </Box>

      <Box>
        <InputLabel>Upload Thumbnail</InputLabel>
        <TextField
          type="file"
          {...register("thumbnail")}
          inputProps={{ accept: "image/*" }}
          error={!!errors.thumbnail}
          helperText={errors.thumbnail?.message as string}
        />
      </Box>

      <CustomButton type="submit" variant="contained" fullWidth>
        Submit
      </CustomButton>
    </Box>
  );
};

export default CreateVideo;
