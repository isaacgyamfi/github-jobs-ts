import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown/with-html';

type JobProps = { job: any };

const Job = ({ job }: JobProps) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className="p-4 m-2 border-solid shadow-lg rounded bg-white">
      <div className="flex justify-between ">
        <div>
          <h4 className="font-bold">{job.title}</h4>
          <span className="font-hairline italic">{job.company}</span>

          <p>{new Date(job.created_at).toLocaleDateString()}</p>
        </div>
        <div>
          <img
            style={{ height: 50 }}
            src={job.company_logo}
            alt={job.company}
          />
        </div>
      </div>
      <div>
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
            onClick={() => setShowDescription(!showDescription)}
            className="bg-teal-600 hover:bg-teal-700 text-white px-3 py-1 rounded shadow-sm"
            type="button"
          >
            {showDescription ? 'Hide' : 'View Details'}
          </button>
          {showDescription ? (
            <div className="bg-teal-100 border-l-4 border-teal-800 m-3 px-3 py-2">
              <ReactMarkdown source={job.description} escapeHtml={false} />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Job;
