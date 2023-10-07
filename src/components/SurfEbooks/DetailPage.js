// DetailPage.js
import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';

function DetailPage({ detail, closeDetail, toggleSecondCard, toggleRecommendPopup, handleEmailChange, handleRecommend, isExpanded, showSecondCard, isRecommendPopupOpen, email }) {
  if (!detail) return null;

  return (
    <div className='detail_container'>
      <div className='detail_content'>
        <button className='close' onClick={closeDetail}>
          <AiOutlineCloseCircle />
        </button>
        <div className="card">
          <div className="card-body">
            <div className="text-center">
              <h5 className="card-title">{detail.name} (Plot)</h5>
            </div>
            <div className="row">
              <div className="col-md-3">
                <p className="card-text text-dark">
                  <strong>Author:</strong> {detail.author}<br />
                  <strong>Category:</strong> {detail.category}<br />
                  <strong>Publisher:</strong> {detail.publisher}<br />
                  <strong>Date:</strong> {detail.date}
                </p>
              </div>
              <div className="col-md-6">
                <p className="card-text text-dark">
                  {detail.description}
                </p>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <button className="btn btn-primary ml-5" onClick={toggleSecondCard}>
                    {isExpanded ? 'Collapse' : 'Read More'}
                  </button>
                  <button className="btn btn-primary ml-5" onClick={toggleRecommendPopup}>Recommend</button>
                </div>
              </div>
              <div className="col-md-3">
                <img
                  src={detail.img}
                  alt="Image"
                  className="img-fluid"
                  style={{
                    maxWidth: '50%',
                    height: 'auto',
                    float: 'right',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        {showSecondCard && (
          <div className="card">
            <div className="card-body">
              <div className="text-center">
                <h5 className="card-title">{detail.name} (Plot)</h5>
              </div>
              {detail && (
                <p>
                  {detail.plot}
                </p>
              )}
            </div>
          </div>
        )}

        {/* Recommendation Popup */}
        {isRecommendPopupOpen && (
          <div className="popup">
            <h2 className="popup-title">Recommend Book</h2>
            <p className="popup-text">Enter your email address:</p>
            <input
              type="email"
              className="popup-input"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
            <div className="popup-button-container">
              <button className="btn btn-secondary" onClick={toggleRecommendPopup}>
                Cancel
              </button>
              <button className="btn btn-primary" onClick={handleRecommend}>
                Send
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DetailPage;
