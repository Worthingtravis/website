import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { EthLogo } from '../components/Icons';

type ProjectCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  openSeaLink?: string;
  blankRasaLink?: string;
  marketingSiteLink?: string;
  blockchain?: string;
  date: string;
  bgImage?: string;
  onHover: (imageSrc: string | null) => void;
};

const ProjectLinks: React.FC<{
  openSeaLink?: string;
  blankRasaLink?: string;
  marketingSiteLink?: string;
  blockchain: string;
  date: string;
}> = ({ openSeaLink, blankRasaLink, marketingSiteLink, blockchain, date }) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 rounded border border-gray-400 bg-gray-900/90 p-1 hover:bg-gray-900/25">
      {(blankRasaLink || openSeaLink) && (
        <a
          href={openSeaLink || blankRasaLink}
          target="_blank"
          rel="noreferrer"
          className="text-lg text-white underline"
        >
          {openSeaLink && 'OpenSea'}
          {blankRasaLink && 'Blank Rasa'}
        </a>
      )}
      <p className="text-lg">|</p>
      {marketingSiteLink && (
        <>
          <a
            href={marketingSiteLink}
            target="_blank"
            rel="noreferrer"
            className="text-lg text-white underline"
          >
            Marketing Site
          </a>
          <p className="text-lg">|</p>
        </>
      )}
      {blockchain && (
        <>
          <p className="flex items-center gap-2 text-lg">
            <EthLogo /> {blockchain}
          </p>
          <p className="text-lg">|</p>
        </>
      )}
      {date && <p className="text-lg">Release Date: {date}</p>}
    </div>
  );
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageSrc,
  openSeaLink,
  blankRasaLink,
  marketingSiteLink,
  blockchain,
  date,
  bgImage,
  onHover,
}) => {
  return (
    <div
      className={clsx(bgImage && 'cursor-pointer')}
      onClick={() => bgImage && onHover(bgImage)}
    >
      <div className="flex w-full flex-col flex-wrap items-center gap-2 rounded border border-gray-400 bg-gray-900/90 p-4 shadow-2xl hover:bg-gray-900">
        <Image
          src={imageSrc}
          className={' rounded bg-cover outline outline-1 outline-gray-900'}
          alt={title}
          width={200}
          height={250}
        />
        <h1 className="text-3xl">{title}</h1>
        <p className="min-h-[182px]  text-lg">{description}</p>
        <ProjectLinks
          openSeaLink={openSeaLink}
          blankRasaLink={blankRasaLink}
          marketingSiteLink={marketingSiteLink}
          blockchain={blockchain}
          date={date}
        />
      </div>
    </div>
  );
};