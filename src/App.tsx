import React, { useState } from 'react';
import useFetchJobs from './hooks/useFetchJobs';
import Job from './components/Job';
import Navbar from './components/Navbar';

function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error } = useFetchJobs(params, page);
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4">
        <div className="flex flesx-wrap my-3">
          <div className="w-full sm:w-1/2 md:w-1/3 m-2">
            <label htmlFor="description">Description</label>
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
              name="description"
              id="description"
            />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 m-2">
            <label htmlFor="location">Location</label>
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
              name="location"
              id="location"
            />
          </div>
        </div>
        {loading && (
          <span>
            <svg
              className="animate-spin h-5 w-5 mr-3"
              viewBox="0 0 24 24"
            ></svg>
          </span>
        )}
        {error && <h1>Error. Try refreshing.</h1>}

        {jobs.map((job: any) => {
          return <Job key={job.title} job={job} />;
        })}
      </div>
    </div>
  );
}

export default App;
