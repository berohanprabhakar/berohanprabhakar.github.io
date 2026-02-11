import React from "react";

export interface Certification {
  title: string;
  organization: string;
  issued: string;
  credentialId: string;
  logo?: string;
  link?: string;
}

interface Props {
  cert: Certification;
}

const CertificationCard: React.FC<Props> = ({ cert }) => {
  return (
    <div className="flex gap-4 py-5 border-b border-gray-200 last:border-none">

      {/* Logo */}
      <div className="w-12 h-12 flex-shrink-0">
        {cert.logo ? (
          <img
            src={cert.logo}
            alt={cert.organization}
            className="w-12 h-12 rounded-md object-contain"
          />
        ) : (
          <div className="w-12 h-12 bg-gray-100 rounded-md flex items-center justify-center text-sm font-semibold text-gray-600">
            {cert.organization.charAt(0)}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="font-semibold text-gray-800 leading-snug">
          {cert.title}
        </h3>

        <p className="text-sm text-gray-600">
          {cert.organization}
        </p>

        <p className="text-sm text-gray-500">
          Issued {cert.issued}
        </p>

        <p className="text-xs text-gray-400 mt-1">
          Credential ID {cert.credentialId}
        </p>

        {cert.link && (
          <a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 px-4 py-1.5 text-sm border border-gray-400 rounded-full hover:bg-gray-100 transition"
          >
            Show credential ↗
          </a>
        )}
      </div>
    </div>
  );
};

export default CertificationCard;