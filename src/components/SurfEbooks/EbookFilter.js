import React from 'react';

function EbookFilter({ searchQuery, searchCategory, searchAuthor, handleSearchChange, handleCategoryChange, handleAuthorChange }) {
  return (
    <div className='card bg-success text-black shadow' style={{ borderRadius: '30px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', border: 'none' }}>
      <div className='card-body text-black' style={{ backgroundColor: 'aliceblue' }}>
        <h4 className='text-center'>E-Book Filter</h4>
        <div className='row justify-content-center'>
          <div className='col-md-4 mb-2'>
            <input
              type='text'
              className='form-control text-center'
              placeholder='Search By Name'
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
          <div className='col-md-4 mb-2'>
            <input
              type='text'
              className='form-control text-center'
              placeholder='Search By Category'
              value={searchCategory}
              onChange={handleCategoryChange}
            />
          </div>
          <div className='col-md-4 mb-2'>
            <input
              type='text'
              className='form-control text-center'
              placeholder='Search By Author'
              value={searchAuthor}
              onChange={handleAuthorChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EbookFilter;
