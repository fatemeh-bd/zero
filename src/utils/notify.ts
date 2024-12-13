import { Bounce, toast } from "react-toastify";

export const notify = (text: string, type: "error" | "success") => {
  if (type === "success") {
    toast.success(text, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      transition: Bounce,
    });
  }
  if (type === "error") {
    toast.error(text, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      progress: undefined,
      transition: Bounce,
      
    });
  }
 
};
