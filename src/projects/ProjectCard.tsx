import React from 'react';
import { EthLogo } from '../components/Icons';

export const ProjectLinks: React.FC<{
  openSeaLink?: string;
  blankRasaLink?: string;
  marketingSiteLink?: string;
  blockchain: string;
  date: string;
}> = ({ openSeaLink, blankRasaLink, marketingSiteLink, blockchain, date }) => {
  return (
    <div
      className={
        'items mt-5 flex w-full flex-wrap items-center justify-center  gap-2  self-end '
      }
    >
      {(blankRasaLink || openSeaLink) && (
        <a
          href={openSeaLink || blankRasaLink}
          target="_blank"
          rel="noreferrer"
          className={'hover:underline'}
        >
          {openSeaLink && 'OpenSea'}
          {blankRasaLink && 'Blank Rasa'}
        </a>
      )}
      {marketingSiteLink && (
        <a
          href={marketingSiteLink}
          target="_blank"
          rel="noreferrer"
          className={'hover:underline'}
        >
          Marketing Site
        </a>
      )}
      {blockchain && (
        <p className="flex items-center gap-2 text-lg">
          <EthLogo /> {blockchain}
        </p>
      )}
      {date && <p className="text-lg">Release Date: {date}</p>}
    </div>
  );
};
