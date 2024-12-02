import { useState } from 'react';
import { fetchJobs } from '../services/jobAPI';

const useJobSearch = () => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const searchJobs = async (params) => {
        setLoading(true);
        setError(null);
        try {
            const jobs = await fetchJobs(params);
            setResults(jobs);
        } catch (err) {
            setError(err.message || 'Failed to fetch jobs.');
        } finally {
            setLoading(false);
        }
    };

    return { results, loading, error, searchJobs };
};

export default useJobSearch;
