import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const closeModal = () => {
    const modal = document.getElementById("my_modal_3");
    if (modal) {
      modal.close();
    }
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <button onClick={closeModal} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h3 className="font-bold text-lg">Login</h3>
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && <span className="text-red-500">This field is required</span>}
            </div>
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && <span className="text-red-500">This field is required</span>}
            </div>
            <div className="flex justify-around mt-4">
              <button type="submit" className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-300">Login</button>
              <p>Not registered? <Link to="/signup" className="underline text-blue-500 cursor-pointer">Signup</Link></p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Login;