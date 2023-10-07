import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import './SurfEbooks.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import ebooksData from './eBooksData'; // Import the eBooks data

function SurfEbooks() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchCategory, setSearchCategory] = useState('');
  const [searchAuthor, setSearchAuthor] = useState('');
  const [detail, setDetail] = useState(null);
  const [showSubscriptionCard, setShowSubscriptionCard] = useState(false);
  const [subscriptionCardData, setSubscriptionCardData] = useState(null);
  const [showSecondCard, setShowSecondCard] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);


  // Form fields
  const [globalId, setGlobalId] = useState('');
  const [name, setName] = useState('');
  const [grade, setGrade] = useState('');
  const [joiningDate, setJoiningDate] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [supervisorName, setSupervisorName] = useState('');

  //recommendatation
  const [isRecommendPopupOpen, setIsRecommendPopupOpen] = useState(false);
  const [email, setEmail] = useState('');


  // download form data function

  const downloadFormData = () => {
    // Create an object with the form data
    const formData = {
      GlobalID: globalId,
      Name: name,
      Grade: grade,
      JoiningDate: joiningDate,
      EmployeeID: employeeId,
      SupervisorName: supervisorName,
    };

    // Convert the form data to JSON format
    const jsonData = JSON.stringify(formData);

    // Create a Blob with the JSON data
    const blob = new Blob([jsonData], { type: 'application/json' });

    // Generate a temporary URL for the Blob
    const url = URL.createObjectURL(blob);

    // Create a link element to trigger the download
    const a = document.createElement('a');
    a.href = url;
    a.download = 'form_data.json';
    document.body.appendChild(a);

    // Click the link to start the download
    a.click();

    // Remove the temporary link and revoke the URL
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };


  const toggleSecondCard = () => {
    setShowSecondCard(!showSecondCard);
    setIsExpanded((prevIsExpanded) => !prevIsExpanded);
  };

  const toggleSubscribeCard = (ebook) => {
    setSubscriptionCardData(ebook);
    setShowSubscriptionCard(true);
  };

  const closeSubscriptionCard = () => {
    setShowSubscriptionCard(false);
  };

  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
  };

  const handleCategoryChange = (e) => {
    const categoryQuery = e.target.value.toLowerCase();
    setSearchCategory(categoryQuery);
  };

  const handleAuthorChange = (e) => {
    const authorQuery = e.target.value.toLowerCase();
    setSearchAuthor(authorQuery);
  };

  const filteredEbooks = ebooksData.filter((ebook) => {
    const nameMatch = ebook.name.toLowerCase().includes(searchQuery);
    const categoryMatch =
      searchCategory === '' || ebook.category.toLowerCase().includes(searchCategory);
    const authorMatch =
      searchAuthor === '' || ebook.author.toLowerCase().includes(searchAuthor);

    return nameMatch && categoryMatch && authorMatch;
  });

  const detailPage = (ebook) => {
    setDetail(ebook);
  };

  const closeDetail = () => {
    setDetail(null);
  };

  //recommendatation
  const toggleRecommendPopup = () => {
    setIsRecommendPopupOpen(!isRecommendPopupOpen);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleRecommend = () => {
    // Handle the recommendation logic here, e.g., send an email
    console.log(`Recommend book ${detail.name} via email: ${email}`);

    // Close the popup after sending the recommendation
    toggleRecommendPopup();
  };

  return (
    <>
      {detail && (
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

                  {/* Check if detail exists before accessing its properties */}
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
      )}




      {/* Subscription Card */}

      {showSubscriptionCard && (
        <div className='detail_container'>
          <div className='detail_content'>
            <button className='close' onClick={closeSubscriptionCard}>
              <AiOutlineCloseCircle />
            </button>
            <div className='detail_info'>

            </div>

            {/* First Card */}
            <div className="card" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
              <div className="card-body">
                <div className="text-center">
                  <h5 className="card-title">{subscriptionCardData.name} (Plot)</h5>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <p className="card-text text-dark">
                      <strong>Author:</strong> {subscriptionCardData.author}<br />
                      <strong>Category:</strong> {subscriptionCardData.category}<br />
                      <strong>Publisher:</strong> {subscriptionCardData.publisher}<br />
                      <strong>Date:</strong> {subscriptionCardData.date}
                    </p>
                  </div>
                  <div className="col-md-6">
                    <p className="card-text text-dark">
                      {subscriptionCardData.description}
                    </p>
                    <div className="d-flex justify-content-between">
                      <button className="btn btn-primary" onClick={toggleSecondCard}>
                        Subscribe It
                      </button>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <img
                      src={subscriptionCardData.img}
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


            {/* second card */}
            {showSecondCard && (
              <div className="card">
                <div className="card-body">
                  <div className="text-center">
                    <h5 className="card-title">{subscriptionCardData.name} (Subscription Form)</h5>
                  </div>

                  {/* Subscription Form */}
                  {/* Subscription Form */}
                  <form>
                    <div className="mb-3">
                      <div className="form-group row">
                        <label htmlFor="globalId" className="col-sm-2 col-form-label">Global ID:</label>
                        <div className="col-sm-4">
                          <input
                            type="text"
                            className="form-control"
                            id="globalId"
                            value={globalId}
                            onChange={(e) => setGlobalId(e.target.value)}
                          />
                        </div>
                        <label htmlFor="name" className="col-sm-2 col-form-label">Name:</label>
                        <div className="col-sm-4">
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="form-group row">
                        <label htmlFor="grade" className="col-sm-2 col-form-label">Grade:</label>
                        <div className="col-sm-4">
                          <input
                            type="text"
                            className="form-control"
                            id="grade"
                            value={grade}
                            onChange={(e) => setGrade(e.target.value)}
                          />
                        </div>
                        <label htmlFor="joiningDate" className="col-sm-2 col-form-label">Joining Date:</label>
                        <div className="col-sm-4">
                          <input
                            type="text"
                            className="form-control"
                            id="joiningDate"
                            value={joiningDate}
                            onChange={(e) => setJoiningDate(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="form-group row">
                        <label htmlFor="employeeId" className="col-sm-2 col-form-label">Employee ID:</label>
                        <div className="col-sm-4">
                          <input
                            type="text"
                            className="form-control"
                            id="employeeId"
                            value={employeeId}
                            onChange={(e) => setEmployeeId(e.target.value)}
                          />
                        </div>
                        <label htmlFor="supervisorName" className="col-sm-2 col-form-label">Supervisor Name:</label>
                        <div className="col-sm-4">
                          <input
                            type="text"
                            className="form-control"
                            id="supervisorName"
                            value={supervisorName}
                            onChange={(e) => setSupervisorName(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Download Button */}
                    <div className="d-flex justify-content-center">
                      <button className="btn btn-primary" onClick={downloadFormData}>
                        Save and Download
                      </button>
                    </div>
                  </form>

                </div>
              </div>
            )}
          </div>
        </div>
      )}



      <div className='SURFBOOKS'>
        <Navbar />
        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
        <div className='container1'>
          <div className='row justify-content-center'>
            <div className='col-xl-12 col-md-12'>
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
            </div>
          </div>

          <hr />

          <div className='row'>
            {filteredEbooks.map((ebook, index) => (
              <div className='col-md-4' key={index}>
                <div
                  className='card'
                  style={{
                    backgroundColor: '#222a35',
                    borderRadius: '30px',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                    border: 'none',
                  }}
                >
                  <div className='card-body text-white'>
                    <div className='row'>
                      <div className='col-md-8'>
                        <h5 className='card-title'>{ebook.name}</h5>
                        <p className='card-text'>Author: {ebook.author}</p>
                        <p className='card-text'>Category: {ebook.category}</p>
                        <button className='card-link-button button-no-underline' onClick={() => detailPage(ebook)}>Preview</button>
                        <button className='card-link-button button-no-underline' onClick={() => toggleSubscribeCard(ebook)}>Subscribe</button>
                      </div>
                      <div className='col-md-4'>
                        <img
                          src={ebook.img}
                          alt='Image'
                          className='img-fluid rounded'
                          style={{
                            borderRadius: '15px',
                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                            border: 'none',
                            maxWidth: '100%',
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <hr />
        </div>
      </div>
    </>
  );
}

export default SurfEbooks;
