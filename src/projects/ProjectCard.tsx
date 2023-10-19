import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { EthLogo } from '../components/Icons';
import { AspectRatio } from '@/components/ui/aspect-ratio';

type ProjectCardProps = {
  title: string;
  imageSrc: string;
  bgImage?: string;
  onHover: (imageSrc: string | null) => void;
};

export const ProjectLinks: React.FC<{
  openSeaLink?: string;
  blankRasaLink?: string;
  marketingSiteLink?: string;
  blockchain: string;
  date: string;
}> = ({ openSeaLink, blankRasaLink, marketingSiteLink, blockchain, date }) => {
  return (
    <div className={'items flex h-32 w-full flex-col  items-center  gap-4 '}>
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

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  imageSrc,
  bgImage,
  onHover,
}) => {
  return (
    <AspectRatio ratio={1}>
      <button
        type="button"
        className={clsx(
          'relative flex h-full w-full flex-col items-center justify-center rounded-md bg-gray-800  shadow-lg'
        )}
        onClick={() => bgImage && onHover(bgImage)}
      >
        <Image
          src={imageSrc}
          alt={title}
          fill
          className={' aspect-square h-full w-full bg-contain'}
        />
      </button>
    </AspectRatio>
  );
};
