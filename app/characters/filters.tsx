// app/characters/filters.tsx
"use client"; // Bu direktifi ekleyin

import React from "react";

interface FiltersProps {
  setStatus: (status: string | null) => void;
  setGender: (gender: string | null) => void;
}

const Filters: React.FC<FiltersProps> = ({ setStatus, setGender }) => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-lg shadow-md mb-4">
      <select onChange={(e) => setStatus(e.target.value)} className="mr-4 p-2 rounded-md text-white bg-blue-700">
        <option value="">Select Status</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
      <select onChange={(e) => setGender(e.target.value)} className="p-2 rounded-md text-white bg-blue-700">
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>
    </div>
  );
};

export default Filters;
