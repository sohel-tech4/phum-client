import { Button } from "antd";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit } = useForm({
    userId: "admin",
    password: "admin123",
  });

  const {login, {data, error}} = userLoginMutation()

  const onSubmit = (data) => {
    const userInfo = {
      id: data.userId,
      password: data.password,
    };
    Login(userInfo)
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="id">ID:</label>
        <input type="text" id="id" {...register("id")}></input>
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="text" id="password" {...register("password")}></input>
      </div>
      <Button htmlType="sumit">Login</Button>
    </form>
  );
};

export default Login;
