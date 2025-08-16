import React from "react";
import jobs from "../assets/data.json";
import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const jobDetails = useLoaderData();
  return (
    <div className="job-details">
      <p>
        <b>Job title:</b>
        {jobDetails.title}
      </p>
      <p>
        <b>company:</b>
        {jobDetails.company}
      </p>
      <p>
        <b>Location:</b> {jobDetails.location}
      </p>
      <p>
        job description:We are looking for a passionate and skilled Full Stack
        Developer to join our growing engineering team. You will be responsible
        for designing, developing, and maintaining both frontend and backend
        systems in a fast-paced, collaborative environment.
      </p>
    </div>
  );
};

export default JobDetails;
export const JobDetailsLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch("http://localhost:5001/jobs/" + id);

  const data = await res.json();
  return data;
};
