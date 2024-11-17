import { certificates } from "../files/certificates"
import CertificateCard from "./CertificateCard"

/**
 * Certificates component displays a collection of earned certificates.
 * It iterates over a list of certificates from a JSON file and renders a CertificateCard for each certificate.
 * 
 * @returns {JSX.Element} The rendered component that includes a heading and collection of certificate cards.
 */
export default function Certificates() {
    return (
        <div className="certificates">
            <h1 className="mb-4">Certificates</h1>
            <div>
                {certificates.map((certificate) => 
                <CertificateCard key={certificate.id} certificate={certificate}/>)}
            </div>
        </div>
    )
}