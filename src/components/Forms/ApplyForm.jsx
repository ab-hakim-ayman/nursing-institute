"use client";
import React, { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { GoPlus } from "react-icons/go";
import ImageUploader from "../Uploader/ImageUploader";
import SignUploader from "../Uploader/SignUploader";
import {
  BoardsName,
  blood_groups,
  semester,
  gender,
  religionArray,
} from "../../../data";

const ApplyForm = () => {
  const [view, setView] = useState("");
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm({
    education: [
      {
        exam_name: "",
        institute_name: "",
        board_name: "",
        passing_year: "",
        grade: "",
      },
    ],
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "education",
  });
  const handleContact = (values) => {
    console.log(values);
  };
  return (
    <div className="container my-10">
      <div>
        <form onSubmit={handleSubmit(handleContact)}>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="flex flex-col">
              <label className="text-[18px] font-[500] mb-3">
                Student Name
              </label>
              <input
                {...register("student_name", { required: true })}
                placeholder="Enter Student Name"
                className="border border-[#999] px-4 py-3 rounded"
              />
              {errors.student_name && (
                <p className="text-primary">This Field is Required</p>
              )}
            </div>
            <div className="flex flex-col">
              <label className="text-[18px] font-[500] mb-3">
                Email Address
              </label>
              <input
                type="email"
                {...register("email_address", { required: true })}
                placeholder="Enter Email Address"
                className="border border-[#999] px-4 py-3 rounded"
              />
              {errors.email_address && (
                <p className="text-primary">This Field is Required</p>
              )}
            </div>
            <div className="flex flex-col">
              <label className="text-[18px] font-[500] mb-3">
                Phone Number
              </label>
              <input
                type="text"
                {...register("phone_number", { required: true })}
                placeholder="Enter Phone number"
                className="border border-[#999] px-4 py-3 rounded"
              />
              {errors.phone_number && (
                <p className="text-primary">This Field is Required</p>
              )}
            </div>
            <div className="flex flex-col">
              <label className="text-[18px] font-[500] mb-3">
                Date of Birth
              </label>
              <input
                type="date"
                {...register("dob", { required: true })}
                placeholder="Enter Phone number"
                className="border border-[#999] px-4 py-3 rounded"
              />
              {errors.dob && (
                <p className="text-primary">This Field is Required</p>
              )}
            </div>
            <div className="flex flex-col">
              <label className="text-[18px] font-[500] mb-3">
                Class Selection
              </label>
              <select
                {...register("student_class", { required: true })}
                className="border border-[#999] px-4 py-3 rounded"
              >
                <option value="" selected>
                  Select Your Class
                </option>
                {semester.map((studetClass) => {
                  return (
                    <>
                      <option>{studetClass}</option>
                    </>
                  );
                })}
              </select>
              {errors.student_class && (
                <p className="text-primary">This Field is Required</p>
              )}
            </div>
            <div className="flex flex-col">
              <label className="text-[18px] font-[500] mb-3">
                Gender Selection
              </label>
              <select
                {...register("gender", { required: true })}
                className="border border-[#999] px-4 py-3 rounded"
              >
                <option value="" selected>
                  Select Your Gender
                </option>
                {gender.map((gender) => {
                  return (
                    <>
                      <option value={gender}>{gender}</option>
                    </>
                  );
                })}
              </select>
              {errors.gender && (
                <p className="text-primary">This Field is Required</p>
              )}
            </div>
            <div className="flex flex-col">
              <label className="text-[18px] font-[500] mb-3">
                Blood Group Selection
              </label>
              <select
                {...register("blood_group", { required: true })}
                className="border border-[#999] px-4 py-3 rounded"
              >
                <option value="" selected>
                  Select Your Blood Group
                </option>
                {blood_groups.map((blood) => {
                  return (
                    <>
                      <option value={blood}>{blood}</option>
                    </>
                  );
                })}
              </select>
              {errors.blood_group && (
                <p className="text-primary">This Field is Required</p>
              )}
            </div>
            <div className="flex flex-col">
              <label className="text-[18px] font-[500] mb-3">
                Religion Selection
              </label>
              <select
                {...register("religion", { required: true })}
                className="border border-[#999] px-4 py-3 rounded"
              >
                <option value="" selected>
                  Select Your Religion
                </option>
                {religionArray.map((religion) => {
                  return (
                    <>
                      <option value={religion}>{religion}</option>
                    </>
                  );
                })}
              </select>
              {errors.religion && (
                <p className="text-primary">This Field is Required</p>
              )}
            </div>
          </div>
          <div className="flex flex-col my-5">
            <label className="text-[18px] font-[500] mb-3">Message</label>
            <textarea
              {...register("message", { required: true })}
              placeholder="Type Your Message"
              type="text"
              className="border border-[#999] px-4 py-3 rounded"
            />
            {errors.message && (
              <p className="text-primary">This Field is Required</p>
            )}
          </div>

          <h2 className="text-[24px] font-[600] my-5">
            Perent’s/Guardian’s Information
          </h2>
          <div className="grid lg:grid-cols-3 gap-5">
            <div className="flex flex-col">
              <label className="text-[18px] font-[500] mb-3">Father Name</label>
              <input
                type="text"
                {...register("father_name", { required: true })}
                placeholder="Enter Father Name"
                className="border border-[#999] px-4 py-3 rounded"
              />
              {errors.father_name && (
                <p className="text-primary">This Field is Required</p>
              )}
            </div>
            <div className="flex flex-col">
              <label className="text-[18px] font-[500] mb-3">
                Father Occupation
              </label>
              <input
                type="text"
                {...register("father_occupation", { required: true })}
                placeholder="Enter Father Occupation"
                className="border border-[#999] px-4 py-3 rounded"
              />
              {errors.father_occupation && (
                <p className="text-primary">This Field is Required</p>
              )}
            </div>
            <div className="flex flex-col">
              <label className="text-[18px] font-[500] mb-3">
                Phone Number
              </label>
              <input
                type="text"
                {...register("father_phone_number", { required: true })}
                placeholder="Enter Phone number"
                className="border border-[#999] px-4 py-3 rounded"
              />
              {errors.father_occupation && (
                <p className="text-primary">This Field is Required</p>
              )}
            </div>
            <div className="flex flex-col">
              <label className="text-[18px] font-[500] mb-3">Mother Name</label>
              <input
                type="text"
                {...register("mother_name", { required: true })}
                placeholder="Enter Mother Name"
                className="border border-[#999] px-4 py-3 rounded"
              />
              {errors.mother_name && (
                <p className="text-primary">This Field is Required</p>
              )}
            </div>
            <div className="flex flex-col">
              <label className="text-[18px] font-[500] mb-3">
                Mother Occupation
              </label>
              <input
                type="text"
                {...register("mother_occupation", { required: true })}
                placeholder="Enter Mother Occupation"
                className="border border-[#999] px-4 py-3 rounded"
              />
              {errors.mother_occupation && (
                <p className="text-primary">This Field is Required</p>
              )}
            </div>
            <div className="flex flex-col">
              <label className="text-[18px] font-[500] mb-3">
                Phone Number
              </label>
              <input
                type="text"
                {...register("mother_phone_number", { required: true })}
                placeholder="Enter Phone number"
                className="border border-[#999] px-4 py-3 rounded"
              />
              {errors.father_occupation && (
                <p className="text-primary">This Field is Required</p>
              )}
            </div>
          </div>
          <div className="flex items-center flex-wrap gap-10 my-5  ">
            <h2 className="font-[600]">If Guardian Is: </h2>
            <div className="flex items-center gap-5">
              <label
                onClick={() => setView("father")}
                htmlFor="father"
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  {...register("gurdian")}
                  id="father"
                  type="radio"
                  className="w-5 h-4"
                />
                <span> Father</span>
              </label>
              <label
                onClick={() => setView("mother")}
                htmlFor="mother"
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  {...register("gurdian")}
                  id="mother"
                  type="radio"
                  className="w-5 h-4"
                />
                <span> Mother</span>
              </label>
              <label
                onClick={() => setView("other")}
                htmlFor="other"
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  {...register("gurdian")}
                  id="other"
                  type="radio"
                  className="w-5 h-4"
                />
                <span> Other</span>
              </label>
            </div>
          </div>
          {view === "other" ? (
            <>
              {" "}
              <div className="grid lg:grid-cols-4 xl:grid-cols-4 gap-5">
                <div className="flex flex-col">
                  <label className="text-[18px] font-[500] mb-3">
                    Guardian Name
                  </label>
                  <input
                    type="text"
                    {...register("guardian_name", { required: true })}
                    placeholder="Enter Guardian Name"
                    className="border border-[#999] px-4 py-3 rounded"
                  />
                  {errors.guardian_name && (
                    <p className="text-primary">This Field is Required</p>
                  )}
                </div>
                <div className="flex flex-col">
                  <label className="text-[18px] font-[500] mb-3">
                    Guardian Occupation
                  </label>
                  <input
                    type="text"
                    {...register("guardian_occupation", { required: true })}
                    placeholder="Enter Guardian Occupation"
                    className="border border-[#999] px-4 py-3 rounded"
                  />
                  {errors.father_occupation && (
                    <p className="text-primary">This Field is Required</p>
                  )}
                </div>
                <div className="flex flex-col">
                  <label className="text-[18px] font-[500] mb-3">
                    Relation
                  </label>
                  <input
                    type="text"
                    {...register("guardian_realation", { required: true })}
                    placeholder="Enter Guardian Relation"
                    className="border border-[#999] px-4 py-3 rounded"
                  />
                  {errors.guardian_realation && (
                    <p className="text-primary">This Field is Required</p>
                  )}
                </div>
                <div className="flex flex-col">
                  <label className="text-[18px] font-[500] mb-3">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    {...register("guardian_phone_number", { required: true })}
                    placeholder="Enter Guardian Phone number "
                    className="border border-[#999] px-4 py-3 rounded"
                  />
                  {errors.guardian_phone_number && (
                    <p className="text-primary">This Field is Required</p>
                  )}
                </div>
              </div>
            </>
          ) : (
            <></>
          )}

          <div className="flex justify-between items-center gap-5 flex-wrap my-8">
            <h2 className=" text-[24px] font-[600] ">
              Education Qualification
            </h2>
            <button
              onClick={() =>
                append({
                  exam_name: "",
                  institute_name: "",
                  board_name: "",
                  passing_year: "",
                  grade: "",
                })
              }
              type="button"
              className="border border-primary px-4 py-2 rounded-md flex items-center gap-2"
            >
              <GoPlus />
              <span>Add New</span>
            </button>
          </div>
          <div>
            {fields.map((field, index) => {
              return (
                <>
                  <div className="grid lg:grid-cols-3 xl:grid-cols-5 gap-5">
                    <div className="flex flex-col" key={field.id}>
                      <label className="text-[18px] font-[500] mb-3">
                        Exam Name
                      </label>
                      <input
                        type="text"
                        {...register(`education.${index}.exam_name`, {
                          required: true,
                        })}
                        placeholder="Enter Exam Name"
                        className="border border-[#999] px-4 py-3 rounded"
                      />
                      {errors.exam_name && (
                        <p className="text-primary">This Field is Required</p>
                      )}
                    </div>
                    <div className="flex flex-col">
                      <label className="text-[18px] font-[500] mb-3">
                        Institute Name
                      </label>
                      <input
                        type="text"
                        {...register(`education.${index}.institute_name`, {
                          required: true,
                        })}
                        placeholder="Enter Institute Name"
                        className="border border-[#999] px-4 py-3 rounded"
                      />
                      {errors.institute_name && (
                        <p className="text-primary">This Field is Required</p>
                      )}
                    </div>

                    <div className="flex flex-col">
                      <label className="text-[18px] font-[500] mb-3">
                        Board Selection
                      </label>
                      <select
                        {...register(`education.${index}.board_name`, {
                          required: true,
                        })}
                        className="border border-[#999] px-4 py-3 rounded"
                      >
                        <option value="" selected>
                          Select Your Board
                        </option>
                        {BoardsName?.map((boardName) => {
                          return (
                            <>
                              <option value={boardName}>{boardName}</option>
                            </>
                          );
                        })}
                      </select>
                      {errors.board_name && (
                        <p className="text-primary">This Field is Required</p>
                      )}
                    </div>
                    <div className="flex flex-col lg:col-span-2 xl:col-auto">
                      <label className="text-[18px] font-[500] mb-3">
                        Passing Year
                      </label>
                      <input
                        type="number"
                        {...register(`education.${index}.passing_year`, {
                          required: true,
                        })}
                        placeholder="Enter Passing Year"
                        className="border border-[#999] px-4 py-3 rounded"
                      />
                      {errors.institute_name && (
                        <p className="text-primary">This Field is Required</p>
                      )}
                    </div>
                    <div className="flex flex-col lg:col-span-1 xl:col-auto">
                      <label className="text-[18px] font-[500] mb-3">
                        Grade
                      </label>
                      <input
                        type="number"
                        {...register(`education.${index}.grade`, {
                          required: true,
                        })}
                        placeholder="Enter Grade"
                        className="border border-[#999] px-4 py-3 rounded"
                      />
                      {errors.institute_name && (
                        <p className="text-primary">This Field is Required</p>
                      )}
                    </div>
                    {index > 0 && (
                      <button type="button" onClick={() => remove(index)}>
                        Remove
                      </button>
                    )}
                  </div>
                </>
              );
            })}
          </div>
          <div className="flex flex-col my-5">
            <label className="text-[18px] font-[500] mb-2">File Upload</label>
            <p className="mb-3">
              2x2 Colored ID Picture, Birth Certificate, Report Card form the
              previous School Certificate of good moral, and Medical Clearance.
            </p>
            <p>
              <span className="font-[600]">Upload</span> (Please Upload Zip, Rar
              File)
            </p>
            <ImageUploader />
            <p>
              Max File Size: <span className="font-[600]">20MB</span>{" "}
            </p>
          </div>
          <div></div>
          <div className="flex items-center gap-5">
            <input
              {...register("gurdian")}
              id=""
              type="checkbox"
              className="w-5 h-4"
            />
            <p>
              {" "}
              I agree to{" "}
              <span className="text-primary font-bold">
                terms & conditions
              </span>{" "}
              provided by the school . I also certify that all information in
              this form is true and accurate.
            </p>
          </div>
          <div>
            <SignUploader />
          </div>
          <div className="flex flex-col ">
            <label className="text-[18px] font-[500] ">Date Signed</label>
            <input
              type="date"
              {...register("signed_date", { required: true })}
              placeholder="Enter Date"
              className="border mt-3 border-[#999] px-4 py-3 rounded"
            />
            {errors.signed_date && (
              <p className="text-primary">This Field is Required</p>
            )}
          </div>
          <div className="flex items-center justify-center mt-8">
            <button className="font-semibold text-slate-800 border border-gray-800 rounded p-3 hover:border-cyan-400">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyForm;
