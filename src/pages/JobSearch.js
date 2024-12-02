import React, { useState } from 'react';
import JobSearchForm from '../component/JobSearch/JobSearchForm';
import JobList from '../component/JobSearch/JobList';
import useJobSearch from '../hooks/useJobSearch';

const JobSearch = () => {
    const { results, loading, error, searchJobs } = useJobSearch();
    const [formData, setFormData] = useState({
        query: '',
        location: '',
        autoTranslateLocation: 'false',
        remoteOnly: 'false',
        employmentTypes: 'fulltime;parttime;intern;contractor',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        searchJobs(formData);
    };

    return (
        <div className="job-search-container">
            <JobSearchForm
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {results.length > 0 ? (
                <JobList results={results} />
            ) : (
                !loading && !error && <p>No jobs found. Please refine your search.</p>
            )}
        </div>
    );
};

export default JobSearch;
