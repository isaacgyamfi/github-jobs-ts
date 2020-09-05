import React from 'react';
import ReactMarkdown from 'react-markdown/with-html';

type JobProps = { job: any };

const Job = ({ job }: JobProps) => {
  return (
    <div className="flex justify-between p-3 m-2 border-solid shadow rounded border-blue-800">
      <div>
        <h4 className="font-bold">{job.title}</h4>
        <span className="font-hairline italic">{job.company}</span>

        <p>{new Date(job.created_at).toLocaleDateString()}</p>
        <div>
          <span className="rounded-full bg-gray-800 text-white px-2 py-1 text-xs mr-2">
            {job.type}
          </span>
          <span className="rounded-full bg-green-900 text-white px-2 py-1 text-xs">
            {job.location}
          </span>
        </div>
        <div
          style={{ wordBreak: 'break-all', marginTop: 10, marginBottom: 10 }}
        >
          <ReactMarkdown source={job.how_to_apply} escapeHtml={false} />
        </div>
        <div>
          <button
            className="bg-teal-600 hover:bg-teal-700 text-white px-3 py-2 rounded shadow-sm"
            type="button"
          >
            View Details
          </button>
        </div>
      </div>
      <img style={{ height: 50 }} src={job.company_logo} alt={job.company} />
    </div>
  );
};

export default Job;
