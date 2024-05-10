"use client";
import React from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm({});
  const handleContact = (values) => {
    console.log(values);
  };
  return (
    <>
      <form onSubmit={handleSubmit(handleContact)}>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="flex flex-col">
            <label className="text-md font-semibold text-slate-800 mb-3">
              Your Name
            </label>
            <input
              {...register("name", { required: true })}
              placeholder="Enter Your Name"
              className="border border-gray-800 px-4 py-3 rounded"
            />
            {errors.name && (
              <p className="text-primary">This Field is Required</p>
            )}
          </div>
          <div className="flex flex-col">
            <label className="text-md font-semibold text-slate-800 mb-3">
              Phone Number
            </label>
            <input
              {...register("phone_number", { required: true })}
              placeholder="Enter Phone Number"
              className="border border-gray-800 px-4 py-3 rounded"
            />
            {errors.phone_number && (
              <p className="text-primary">This Field is Required</p>
            )}
          </div>
          <div className="flex flex-col">
            <label className="text-md font-semibold text-slate-800 mb-3">
              Subject
            </label>
            <input
              {...register("subject", { required: true })}
              placeholder="Enter Subject"
              className="border border-gray-800 px-4 py-3 rounded"
            />
            {errors.subject && (
              <p className="text-primary">This Field is Required</p>
            )}
          </div>
          <div className="flex flex-col">
            <label className="text-md font-semibold text-slate-800 mb-3">
              Email
            </label>
            <input
              {...register("email", { required: true })}
              placeholder="Enter Subject"
              type="email"
              className="border border-gray-800 px-4 py-3 rounded"
            />
            {errors.email && (
              <p className="text-primary">This Field is Required</p>
            )}
          </div>
        </div>
        <div className="flex flex-col my-5">
          <label className="text-md font-semibold text-slate-800 mb-3">
            Message
          </label>
          <textarea
            {...register("message", { required: true })}
            placeholder="Type Your Message"
            type="text"
            className="border border-gray-800 px-4 py-3 rounded"
          />
          {errors.message && (
            <p className="text-primary">This Field is Required</p>
          )}
        </div>
        <div className="flex items-center justify-center">
          <button className="font-semibold text-slate-800 border border-gray-800 rounded p-3 hover:border-cyan-400">
            Send Message
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
