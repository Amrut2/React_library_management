import React, { useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';

function SubscriptionCard({
  showSubscriptionCard,
  subscriptionCardData,
  closeSubscriptionCard,
  globalId,
  name,
  grade,
  joiningDate,
  employeeId,
  supervisorName,
  downloadFormData,
}) {
  if (!showSubscriptionCard) return null;

  const [subscribed, setSubscribed] = useState(false);
  const [showSecondCard, setShowSecondCard] = useState(false);
  const [subscriptionSuccess, setSubscriptionSuccess] = useState(false);

  // Define state variables and setter functions for the form fields
  const [formGlobalId, setFormGlobalId] = useState(globalId);
  const [formName, setFormName] = useState(name);
  const [formGrade, setFormGrade] = useState(grade);
  const [formJoiningDate, setFormJoiningDate] = useState(joiningDate);
  const [formEmployeeId, setFormEmployeeId] = useState(employeeId);
  const [formSupervisorName, setFormSupervisorName] = useState(supervisorName);

  const handleSubscribe = () => {
    setSubscribed(!subscribed);

  // Toggle the 'showSecondCard' state only if subscribed is false
  if (!subscribed) {
    setShowSecondCard(!showSecondCard);
  }
  };

  const handleDownloadFormData = () => {
    // Handle the download logic here
    // After successful download, set the subscriptionSuccess state to true
    downloadFormData();
    setSubscriptionSuccess(true);
  };

  return (
    <div className='detail_container'>
      <div className='detail_content'>
        <button className='close' onClick={closeSubscriptionCard}>
          <AiOutlineCloseCircle />
        </button>
        <div className='detail_info'>
          {/* ... Existing code for detail_info */}
        </div>

        {/* First Card */}
        <div className='card' style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
          <div className='card-body'>
            <div className='text-center'>
              <h5 className='card-title'>{subscriptionCardData.name} (Plot)</h5>
            </div>
            <div className='row'>
              <div className='col-md-3'>
                <p className='card-text text-dark'>
                  <strong>Author:</strong> {subscriptionCardData.author}<br />
                  <strong>Category:</strong> {subscriptionCardData.category}<br />
                  <strong>Publisher:</strong> {subscriptionCardData.publisher}<br />
                  <strong>Date:</strong> {subscriptionCardData.date}
                </p>
              </div>
              <div className='col-md-6'>
                <p className='card-text text-dark'>
                  {subscriptionCardData.description}
                </p>
                <div className='d-flex justify-content-between'>
                <button className='btn btn-primary' onClick={handleSubscribe}>
                    Subscribe It
                  </button>
                </div>
              </div>
              <div className='col-md-3'>
                <img
                  src={subscriptionCardData.img}
                  alt='Image'
                  className='img-fluid'
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

        {/* Second Card */}
        {showSecondCard && (
          <div className='card'>
            <div className='card-body'>
              <div className='text-center'>
                <h5 className='card-title'>{subscriptionCardData.name} (Subscription Form)</h5>
              </div>

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
                    <button className='btn btn-primary' onClick={handleDownloadFormData}>
                    {subscriptionSuccess ? 'Subscribed successfully!' : 'Save and Download'}
                  </button>
                    </div>

                  </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SubscriptionCard;
