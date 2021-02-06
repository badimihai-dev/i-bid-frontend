import {
  Box,
  Button,
  CircularProgress,
  ClickAwayListener,
  TextField,
  Typography,
} from "@material-ui/core";
import { AnimatePresence } from "framer-motion";
import React from "react";
import { StyledBackground, StyledBox } from "./CreateAd.style";
import { useForm } from "react-hook-form";
import { usePostAd } from "../../api/";

export default function CreateAd({ isVisible = false, onClose }) {
  const { register, handleSubmit, errors } = useForm();
  const [postAd, { status: postAdStatus, error: postAdError }] = usePostAd();
  // const [files, setFiles] = useState([]);

  const onSubmit = (formData) => {
    postAd({ ...formData, images: [] });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <StyledBackground
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <ClickAwayListener onClickAway={onClose}>
            <StyledBox
              initial={{ marginTop: "-200px", opacity: 0 }}
              animate={{ marginTop: "0px", opacity: 1 }}
              exit={{ marginTop: "200px", opacity: 0 }}
            >
              <Box textAlign="center">
                <Typography color="primary" variant="h4">
                  Create Ad!
                </Typography>
              </Box>
              <TextField
                helperText={errors.title?.message}
                error={!!errors.title?.message}
                name="title"
                variant="outlined"
                placeholder="Enter ad title"
                inputRef={register({ required: "Field is required" })}
                label="Title"
              />
              <TextField
                helperText={errors.description?.message}
                error={!!errors.description?.message}
                name="description"
                variant="outlined"
                placeholder="Enter ad description"
                inputRef={register({ required: "Field is required" })}
                label="Description"
              />
              <TextField
                helperText={errors.startBid?.message}
                error={!!errors.startBid?.message}
                name="startBid"
                variant="outlined"
                type="number"
                placeholder="Enter ad starging bid"
                inputRef={register({ required: "Field is required" })}
                label="Starting bid"
              />
              <Box display="flex" flexDirection="column">
                <Typography>Enter ad ending date:</Typography>
                <TextField
                  helperText={errors.endDate?.message}
                  error={!!errors.endDate?.message}
                  name="endDate"
                  variant="outlined"
                  type="date"
                  inputRef={register({ required: "Field is required" })}
                />
              </Box>
              {/* <TextField
                type="file"
                onChange={(e) =>
                  e.target.files.length > 0 && setFiles(e.target.files)
                }
              /> */}
              {postAdError?.response?.data?.message && (
                <Typography color="error">
                  {postAdError.response.data.message}
                </Typography>
              )}
              <Box display="flex" justifyContent="space-around">
                <Button variant="outlined" color="#333" onClick={onClose}>
                  <Typography color="#333">Close</Typography>
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit(onSubmit)}
                >
                  {postAdStatus === "loading" ? (
                    <CircularProgress color="#fff" />
                  ) : (
                    <Typography color="#fff">Post</Typography>
                  )}
                </Button>
              </Box>
            </StyledBox>
          </ClickAwayListener>
        </StyledBackground>
      )}
    </AnimatePresence>
  );
}
