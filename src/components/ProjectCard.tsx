import React from 'react';
import Image from 'next/image';
import { EthLogo } from './Icons';
import clsx from 'clsx';

type ProjectCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  openSeaLink?: string;
  blankRasaLink?: string;
  marketingSiteLink?: string;
  blockchain?: string;
  date: string;
  additionalInfo: string;
  bgImage?: string;
};

const ProjectLinks: React.FC<{
  openSeaLink?: string;
  blankRasaLink?: string;
  marketingSiteLink?: string;
  blockchain: string;
  date: string;
}> = ({ openSeaLink, blankRasaLink, marketingSiteLink, blockchain, date }) => {
  return (
    <div className="flex flex-wrap items-center gap-2 rounded border border-sky-400 bg-gray-900 bg-opacity-50 p-4 hover:bg-opacity-25">
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
  additionalInfo,
  bgImage,
}) => {
  return (
    <div
      className={clsx(
        'relative flex w-full flex-col gap-2 rounded-lg bg-sky-900 p-4 ',
        bgImage && 'bg-opacity-10  '
      )}
    >
      {bgImage && (
        <div className="absolute inset-0 bottom-0 left-0 right-0 top-0 -z-10  rounded ">
          <Image
            src={bgImage}
            alt={title}
            className={'rounded-lg'}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      )}
      <div className={'flex gap-8'}>
        <Image
          src={imageSrc}
          className={'min-w-[250px] rounded  outline outline-1 outline-sky-400'}
          alt={title}
          width={250}
          height={250}
        />
        <div className="flex w-full flex-col flex-wrap gap-2 rounded border border-sky-400 bg-gray-900 bg-opacity-50 p-4 hover:bg-opacity-25">
          <h1 className="text-6xl">{title}</h1>
          <p className="text-lg ">{description}</p>
        </div>
      </div>
      <br />
      <ProjectLinks
        openSeaLink={openSeaLink}
        blankRasaLink={blankRasaLink}
        marketingSiteLink={marketingSiteLink}
        blockchain={blockchain}
        date={date}
      />
    </div>
  );
};
