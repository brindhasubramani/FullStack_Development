// // src/components/Sidebar.jsx
// import React, { useState } from 'react';
// import './Sidebar.css';

// const Sidebar = ({ filters, setFilters }) => {
//   const [category, setCategory] = useState('');
//   const [priceRange, setPriceRange] = useState('');

//   const handleCategoryChange = (e) => {
//     setCategory(e.target.value);
//     setFilters({ ...filters, category: e.target.value });
//   };

//   const handlePriceChange = (e) => {
//     setPriceRange(e.target.value);
//     setFilters({ ...filters, priceRange: e.target.value });
//   };

//   return (
//     <div className="sidebar">
//       <h3>Filter Options</h3>
//       <div className="filter-group">
//         <label htmlFor="category">Category:</label>
//         <select id="category" value={category} onChange={handleCategoryChange}>
//           <option value="">All</option>
//           <option value="cars">Cars</option>
//           <option value="dolls">Dolls</option>
//           <option value="blocks">Blocks</option>
//           <option value="musical">Musical</option>
//           <option value="plush">Plush Toys</option>
//         </select>
//       </div>
//       <div className="filter-group">
//         <label htmlFor="price">Price Range:</label>
//         <select id="price" value={priceRange} onChange={handlePriceChange}>
//           <option value="">All</option>
//           <option value="0-25">0 - 25</option>
//           <option value="25-50">25 - 50</option>
//           <option value="50-100">50 - 100</option>
//           <option value="100+">100+</option>
//         </select>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
// src/components/Sidebar.jsx
import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = ({ filters, setFilters }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState('');

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    const newSelectedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category];
    setSelectedCategories(newSelectedCategories);
    setFilters({ ...filters, categories: newSelectedCategories });
  };

  const handlePriceChange = (e) => {
    setPriceRange(e.target.value);
    setFilters({ ...filters, priceRange: e.target.value });
  };

  return (
    <div className="sidebar">
      <h3>Filter Options</h3>
      <div className="filter-group">
        <label>Categories:</label>
        <div>
          <label>
            <input
              type="checkbox"
              value="baby"
              checked={selectedCategories.includes('baby')}
              onChange={handleCategoryChange}
            />
            Baby
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              value="board"
              checked={selectedCategories.includes('board')}
              onChange={handleCategoryChange}
            />
           Board
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              value="craft"
              checked={selectedCategories.includes('craft')}
              onChange={handleCategoryChange}
            />
           Craft
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              value="electronic"
              checked={selectedCategories.includes('electronic')}
              onChange={handleCategoryChange}
            />
            Electronic
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              value="outdoor"
              checked={selectedCategories.includes('outdoor')}
              onChange={handleCategoryChange}
            />
          Outdoor
          </label>
        </div>
      </div>
      {/* <div className="filter-group">
        <label>Price Range:</label>
        <div>
          <label>
            <input
              type="radio"
              name="price"
              value="0-25"
              checked={priceRange === '0-25'}
              onChange={handlePriceChange}
            />
            0 - 25
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="price"
              value="25-50"
              checked={priceRange === '25-50'}
              onChange={handlePriceChange}
            />
            25 - 50
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="price"
              value="50-100"
              checked={priceRange === '50-100'}
              onChange={handlePriceChange}
            />
            50 - 100
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="price"
              value="100+"
              checked={priceRange === '100+'}
              onChange={handlePriceChange}
            />
            100+
          </label>
        </div>
      </div> */}
    </div>
  );
};

export default Sidebar;
