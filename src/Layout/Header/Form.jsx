import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { request } from "../../config/request";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { saveState } from "../../lib/Storage";

const Form = () => {
  const { reset, handleSubmit, register } = useForm();
  const navigate = useNavigate();
  const submit = (data) => {
    request
      .post("/login", data)
      .then((res) => {
        saveState("user", res.data);
        toast("Logged in successfully", { type: "success" })
        console.log(res.data);
        navigate("/profile")
      })
      .catch((error) => {
        console.log(error);
        toast("Something went wrong. Please try again", { type: "error" })
        localStorage.clear("user");
      })
      .finally(() => {
        if (loadState("user")) {
        navigate("/contact", { replace: true });
        }
      });
    reset();
  };
  return (
    <form onSubmit={handleSubmit(submit)}>
            <div>
              <TextField
                placeholder="Email"
                fullWidth
                sx={{ mb: "10px" }}
                {...register("email", { required: true })}
              />
            </div>
            <div>
              <TextField
                placeholder="Password"
                fullWidth
                sx={{ mb: "10px" }}
                {...register("password", { required: true })}
              />
            </div>
            
            <Button
              style={{ marginBlock: "10px" }}
              type="submit"
              fullWidth
              variant="contained"
            >
              Submit
            </Button>
          </form>
  );
};

export default Form;