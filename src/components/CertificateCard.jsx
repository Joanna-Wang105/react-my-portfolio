import React, {useState} from 'react';

/**
 * The CertificateCard component renders a card displaying the details of a certificate.
 * When the button is clicked, it attempts to open the associated PDF document in a new tab.
 * If an error occurs while accessing the document, an alert is displayed.
 * 
 * @param {Object} certificate - The certificate object containing details of the certificate from JSON file
 * @returns {JSX.Element} The rendered certificate card with a button to view the certificate and an error message if the file can't be accessed.
 */

export default function CertificateCard({ certificate }) {
    const [error, setError] = useState(false)

    const handleClick = () => {
        try {
          const pdfPath = new URL(certificate.path, import.meta.url).href;

          // Open file in a new tab when the path exists
          window.open(pdfPath, '_blank'); 
        } catch (error) {
          setError(true);
          console.error('Error accessing PDF');
        }
      };

    return (
        <div className='card mb-3 me-5'>
            <div className='card-body'>
                <h2 className='cert-name'>{certificate.name}</h2>
                <p>{certificate.description}</p>

                <button onClick={handleClick} className='btn btn-outline-info bi bi-eye-fill'>
                    {certificate.documentName}
                </button>

                {/* Display alert when error occurred */}
                {error &&
                    <div className="alert alert-danger" role="alert">
                    Oops, this file cannot be opened.
                </div>
                }

            </div>
            
        </div>
    );
}
