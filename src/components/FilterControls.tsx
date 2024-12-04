import React from 'react';

//Definition of the props interface used for typescript
interface FilterControlsProps {
  filterName: string;
  filterLanguage: string;
  setFilterName: (name: string) => void;
  setFilterLanguage: (language: string) => void;
}

//Definition of the FilterControls component functions

const FilterControls: React.FC<FilterControlsProps> = ({
  filterName,
  filterLanguage,
  setFilterName,
  setFilterLanguage,
}) => {
  return (
    <div>
      {/*Input to filter the repositories by name */}
      <input
        type="text"
        placeholder="Filter by repository name"
        value={filterName}
        onChange={(e) => setFilterName(e.target.value)}
      />
      {/*Input to filter the repositories by programming language */}
      <input
        type="text"
        placeholder="Filter by language"
        value={filterLanguage}
        onChange={(e) => setFilterLanguage(e.target.value)}
      />
    </div>
  );
};

export default FilterControls;
