import { Button } from '@mui/material';
import React, { useState } from 'react';

const shortText = (text, maxLength) => {
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
                    <strong>Salary Range:</strong> {job.salaryRange || 'Not specified'} <br />
                    <strong>Location:</strong> {job.location || "Not Mentioned"} <br />
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
            {isExpanded ? description : shortText(description, maxLength)}
            {description.length > maxLength && (
                <Button variant='outlined' onClick={handleToggle} style={{ marginLeft: '5px', cursor: 'pointer' }}>
                    {isExpanded ? 'Show Less' : 'Read More'}
                </Button>
            )}
        </div>
    );
};

export default JobList;
