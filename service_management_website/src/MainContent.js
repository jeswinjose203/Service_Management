import React, { useState, useEffect } from 'react';
import { Card, Input, Select, List } from 'antd';
import axios from 'axios';
import { Link } from 'react-router-dom';

const { Search } = Input;
const { Option } = Select;

const MainContent = () => {
  const [jobs, setJobs] = useState([]); // Holds all the jobs fetched from the JSON
  const [filteredJobs, setFilteredJobs] = useState([]); // Holds the filtered jobs (search + filter)
  const [searchTerm, setSearchTerm] = useState(''); // Stores the current search term
  const [filter, setFilter] = useState(''); // Stores the current filter

  // Fetch job data from the JSON file
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('/jobs.json'); // Adjust the path if needed
        const jobData = response.data;
        setJobs(jobData);
        setFilteredJobs(jobData); // Show all jobs initially
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
        job.title.toLowerCase().includes(searchVal.toLowerCase()) ||
        job.description.toLowerCase().includes(searchVal.toLowerCase()) // Search in title and description
      );
    }

    // Apply filter title if exists
    if (filterVal) {
      filtered = filtered.filter(job => job.title === filterVal);
    }

    // Update filtered jobs
    setFilteredJobs(filtered);
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
    <div
      style={{
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        margin: '0 200px', // Add margin to both sides
        overflowX: 'hidden', // Prevent horizontal scrolling
      }}
    >
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
          <Option value="plumbing">Plumbing</Option>
          <Option value="electric_work">Electric Work</Option>
          <Option value="house_cleaning">House Cleaning</Option>
        </Select>
      </div>
      <div style={{ flex: 1, overflow: 'auto', overflowX: 'hidden' }}>
        <List
          dataSource={filteredJobs}
          renderItem={job => (
            <List.Item key={job.id} style={{ width: '100%' }}> {/* Full width for each item */}
              <Link to={`/job/${job.id}`} state={{ job }} style={{ width: '100%' }}>
                <Card
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between', // Push items to opposite sides
                    alignItems: 'center', // Center vertically
                  }}
                  bodyStyle={{
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  {/* Left Section: Job Details */}
                  <div style={{ flex: 1 }}>
                    {/* Job Title with Larger Font and Bold Styling */}
                    <p
                      style={{
                        fontSize: '24px', // Increased font size for the title
                        fontWeight: 'bold', // Bolder text
                        marginBottom: '10px', // Add spacing below the title
                      }}
                    >
                      {job.title}
                    </p>
                    <p><strong>Company:</strong> {job.company}</p>
                    <p><strong>Location:</strong> {job.location}</p>
                    <p><strong>Type:</strong> {job.type}</p>
                    <p><strong>Description:</strong> {job.description}</p>
                  </div>

                  {/* Right Section: Cash */}
                  <div
                    style={{
                      textAlign: 'right',
                      minWidth: '150px',
                      whiteSpace: 'nowrap', // Prevent wrapping to the next line
                    }}
                  >
                    <p
                      style={{
                        fontSize: '28px', // Large font size for cash
                        fontWeight: 'bold', // Bold text for emphasis
                        color: '#1890ff', // Ant Design blue color
                        margin: 0,
                      }}
                    >
                      {job.cash || '₹0'} {/* Display salary or ₹0 if not present */}
                    </p>
                  </div>
                </Card>
              </Link>
            </List.Item>
          )}
          locale={{ emptyText: 'No jobs found' }} // Message if no jobs found
        />
      </div>
    </div>
  );
};

export default MainContent;
