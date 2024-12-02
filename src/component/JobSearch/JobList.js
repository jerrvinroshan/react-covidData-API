import { Button } from '@mui/material';
import React, { useState } from 'react';

const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return `${text.slice(0, maxLength)}...`;
};

const JobList = ({ results }) => {
    return (
        <ul>
            {results.map((job, index) => (
                <li key={index}>
                    <strong>Title:</strong> {job.title} <br />
                    <strong>Company:</strong> {job.company} <br />
                    <strong>Salary:</strong> {job.salary || 'Not specified'} <br />
                    <strong>Location:</strong> {job.location} <br />
                    <strong>Employment Type:</strong> {job.employmentType} <br />
                    <JobDescription description={job.description} />
                    <hr />
                </li>
            ))}
        </ul>
    );
};

const JobDescription = ({ description }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const maxLength = 250;

    const handleToggle = () => {
        setIsExpanded((prev) => !prev);
    };

    return (
        <div>
            <strong>Description:</strong>{' '}
            {isExpanded ? description : truncateText(description, maxLength)}
            {description.length > maxLength && (
                <Button variant='outlined' onClick={handleToggle} style={{ marginLeft: '5px', cursor: 'pointer' }}>
                    {isExpanded ? 'Show Less' : 'Read More'}
                </Button>
            )}
        </div>
    );
};

export default JobList;
