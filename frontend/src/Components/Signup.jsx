import React from 'react';
import { useForm } from 'react-hook-form';
import Login from './Login';
import {Link} from 'react-router-dom'

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const openLoginModal = () => {
    const modal = document.getElementById('my_modal_3');
    if (modal) {
      modal.showModal();
    }
  };
  const closeModal = () => {
    const modal = document.getElementById("my_modal_3");
    if (modal) {
      modal.close();
    }
  };

  return (
    <div>
      <div className='flex h-screen items-center justify-center'>
        <div className="w-[600px]">
          <div className="modal-box">
            <Link  to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
            <h3 className="font-bold text-lg">Signup</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("name", { required: true })}
                />
                <br />
                {errors.name && <span className="text-red-500">This field is required</span>}
              </div>
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
                <button type="submit" className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-300">Signup</button>
              </div>
            </form>
            <p className="flex justify-center mt-4">
              Have an account? <span className="underline text-blue-500 cursor-pointer ml-1" onClick={openLoginModal}>Login</span>
            </p>
          </div>
        </div>
      </div>
      <Login />
    </div>
  );
};

export default Signup;
