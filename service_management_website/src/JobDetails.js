import React from 'react';
import { useLocation } from 'react-router-dom'; // Use this hook to access the passed state

const JobDetails = () => {
  const { state } = useLocation(); // Retrieve the state (job data) passed via Link
  const { job } = state || {}; // Destructure the job object

  if (!job) return <div>Job not found!</div>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>{job.title}</h1>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Type:</strong> {job.type}</p>
      <p><strong>Description:</strong> {job.description}</p>
      <p><strong>Cash:</strong> {job.cash || '₹0'}</p>
    </div>
  );
};

export default JobDetails;
