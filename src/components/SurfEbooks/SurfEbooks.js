// SurfEbooks.js
import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import './SurfEbooks.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import ebooksData from './eBooksData';
import DetailPage from './DetailPage';
import SubscriptionCard from './SubscriptionCard';

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

  // Recommendation
  const [isRecommendPopupOpen, setIsRecommendPopupOpen] = useState(false);
  const [email, setEmail] = useState('');

  // Download form data function
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

  // Recommendation
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
        <DetailPage
          detail={detail}
          closeDetail={closeDetail}
          toggleSecondCard={toggleSecondCard}
          toggleRecommendPopup={toggleRecommendPopup}
          handleEmailChange={handleEmailChange}
          handleRecommend={handleRecommend}
          isExpanded={isExpanded}
          showSecondCard={showSecondCard}
          isRecommendPopupOpen={isRecommendPopupOpen}
          email={email}
        />
      )}

      {showSubscriptionCard && (
        <SubscriptionCard
          showSubscriptionCard={showSubscriptionCard}
          subscriptionCardData={subscriptionCardData}
          closeSubscriptionCard={closeSubscriptionCard}
          globalId={globalId}
          name={name}
          grade={grade}
          joiningDate={joiningDate}
          employeeId={employeeId}
          supervisorName={supervisorName}
          downloadFormData={downloadFormData}
          toggleSecondCard={toggleSecondCard}
        />
      )}

      <div className='SURFBOOKS'>
        <Navbar />
        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />

        <div className='container1'>
          <div className='row justify-content-center'>
            <div className='col-xl-12 col-md-12'>
              {/* EbookFilter */}
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
              {/* End of EbookFilter */}
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
                            <button
                              className='card-link-button button-no-underline'
                              onClick={() => detailPage(ebook)}
                            >
                              Preview
                            </button>
                            <button
                              className='card-link-button button-no-underline'
                              onClick={() => toggleSubscribeCard(ebook)}
                            >
                              Subscribe
                            </button>
                          </div>
                          <div className='col-md-4'>
                            <img
                              src={ebook.img}
                              alt='Ebook Cover'
                              className='img-fluid'
                              style={{
                                maxWidth: '100%',
                                height: 'auto',
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SurfEbooks;
