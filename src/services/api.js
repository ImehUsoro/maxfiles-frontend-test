import { toast } from "react-toastify";

export const login = async (formData, loading, navigate) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/login`, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data = await response.json();
    loading(false);
    if (data.status === 200) {
      navigate("/");
    } else {
      toast.error(data.message);
    }
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const signUp = async (formData, loading, navigate) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/register`,
      {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    const data = await response.json();
    loading(false);
    if (data.status === 200) {
      navigate("/login");
    } else {
      toast.error(data.message);
    }
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
