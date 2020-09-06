import React, { useState } from 'react';
import useFetchJobs from './hooks/useFetchJobs';
import Job from './components/Job';
import Navbar from './components/Navbar';
import SearchForm from './components/SearchForm';

function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error } = useFetchJobs(params, page);

  const handleSearch = (e: any) => {
    const param = e.target.name;
    const value = e.target.value;
    setPage(1);
    setParams((prevParams) => {
      return { ...prevParams, [param]: value };
    });
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto md:px-4">
        <SearchForm searchKeys={params} onSearchKeysChange={handleSearch} />
        {loading && (
          <div className="border border-gray-300 shadow rounded-md p-4 w-full">
            <div className="animate-pulse flex space-x-4">
              <div className="flex-1 space-y-4 py-1">
                <div className="h-4 bg-gray-400 rounded w-3/4"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-400 rounded"></div>
                  <div className="h-4 bg-gray-400 rounded w-5/6"></div>
                </div>
              </div>
              <div className="rounded-full bg-gray-400 h-12 w-12"></div>
            </div>
          </div>
        )}
        {error && <h1>Error. Try refreshing.</h1>}

        {jobs.map((job: any) => {
          return <Job key={job.id} job={job} />;
        })}
      </div>
    </div>
  );
}

export default App;
