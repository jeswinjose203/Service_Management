import React, { useState, useEffect } from 'react';
import { Card, Input, Select, List } from 'antd';
import axios from 'axios';

const { Search } = Input;
const { Option } = Select;

const MainContent = () => {
  const [jobs, setJobs] = useState([]);  // Holds all the jobs fetched from the JSON
  const [filteredJobs, setFilteredJobs] = useState([]);  // Holds the filtered jobs (search + filter)
  const [searchTerm, setSearchTerm] = useState('');  // Stores the current search term
  const [filter, setFilter] = useState('');  // Stores the current filter

  // Fetch job data from the JSON file
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('/jobs.json'); // Adjust the path if needed
        const jobData = response.data;
        setJobs(jobData);
        setFilteredJobs(jobData.slice(0, 12)); // Display the first 4 jobs by default
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();
  }, []);

  // Function to handle filtering and searching logic
  const filterJobs = (searchVal, filterVal) => {
    let filtered = jobs;

    // Apply search term if exists
    if (searchVal) {
      filtered = filtered.filter(job =>
        job.title.toLowerCase().includes(searchVal.toLowerCase())
      );
    }

    // Apply filter type if exists
    if (filterVal) {
      filtered = filtered.filter(job => job.type === filterVal);
    }

    // Update filtered jobs
    setFilteredJobs(filtered.length > 0 ? filtered : jobs.slice(0, 4)); // Default to 4 jobs if no results
  };

  // Search handler
  const handleSearch = (value) => {
    setSearchTerm(value);
    filterJobs(value, filter); // Apply both search and filter logic
  };

  // Filter handler
  const handleFilterChange = (value) => {
    setFilter(value);
    filterJobs(searchTerm, value); // Apply both search and filter logic
  };

  return (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between' }}>
        <Search
          placeholder="Search for jobs"
          enterButton="Search"
          size="large"
          onSearch={handleSearch}
          style={{ width: '80%' }}
        />
        <Select
          placeholder="Filter by job type"
          style={{ width: '19%', marginLeft: '1%' }}
          onChange={handleFilterChange}
          allowClear // Allow clearing the filter
        >
          <Option value="full-time">Full-Time</Option>
          <Option value="part-time">Part-Time</Option>
          <Option value="contract">Contract</Option>
        </Select>
      </div>
      <div style={{ flex: 1, overflow: 'auto' }}>
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={filteredJobs}
          renderItem={job => (
            <List.Item key={job.id}>
              <Card title={job.title} style={{ height: '100%' }}>
                <p><strong>Company:</strong> {job.company}</p>
                <p><strong>Location:</strong> {job.location}</p>
                <p><strong>Type:</strong> {job.type}</p>
                <p><strong>Description:</strong> {job.description}</p>
              </Card>
            </List.Item>
          )}
          locale={{ emptyText: 'No jobs found' }} // Message if no jobs found
        />
      </div>
    </div>
  );
};

export default MainContent;
