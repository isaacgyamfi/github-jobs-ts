import React from 'react';

// interface SearchFormProps {
//   searchKeys: {
//     description: string;
//     location: string;
//   };
//   onSearchKeysChange: any;
// }

type SearchFormProps = {
  searchKeys: any;
  onSearchKeysChange: any;
};

const SearchForm = ({ searchKeys, onSearchKeysChange }: SearchFormProps) => {
  return (
    <div className="flex flesx-wrap my-3">
      <div className="w-full sm:w-1/2 md:w-1/3 m-2">
        <label htmlFor="description">Description</label>
        <input
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-900"
          type="text"
          name="description"
          id="description"
          onChange={onSearchKeysChange}
          value={searchKeys.description}
        />
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 m-2">
        <label htmlFor="location">Location</label>
        <input
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-900"
          type="text"
          name="location"
          id="location"
          onChange={onSearchKeysChange}
          value={searchKeys.location}
        />
      </div>
    </div>
  );
};

export default SearchForm;
