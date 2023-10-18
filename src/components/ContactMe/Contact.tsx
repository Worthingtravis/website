import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useMemo, useState } from 'react';

import { format, utcToZonedTime } from 'date-fns-tz';
import QRCode from 'qrcode.react';
import type { ContactInfo } from './Contact.config';
import { generateVCard } from './Contact.config';

function getTimeZoneNameFromAbbr(abbr: string) {
  const timeZoneMap = {
    PST: 'Canada/Pacific',
  };
  return timeZoneMap[abbr] || abbr;
}

const ContactDetails = ({ contact }: { contact: ContactInfo }) => (
  <div className="mx-auto  flex flex-col items-start space-y-2">
    {Object.entries(contact).map(([key, value]) => {
      if (key === 'Time Zone' && value.isTimeZone) {
        const timeZone = value.value;
        const zoneName = getTimeZoneNameFromAbbr(timeZone);
        const nowInZone = utcToZonedTime(new Date(), zoneName);
        const formattedTime = format(nowInZone, 'hh:mm a', {
          timeZone: zoneName,
        });

        return (
          <div key={key} className="flex items-center space-x-2">
            <span className="text-sm text-white">{key}:</span>
            <span className="text-sm text-blue-400">{formattedTime}</span>
          </div>
        );
      }

      const isLink = typeof value === 'object' && value.isLink;
      const actualValue = isLink ? value.value : value;
      const hasIcon = typeof value === 'object' && value.icon;

      return !hasIcon ? (
        <div key={key} className="flex items-center space-x-2">
          <span className="text-sm text-white">{key}:</span>
          {isLink ? (
            <Link
              href={actualValue}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-blue-400"
            >
              {actualValue}
            </Link>
          ) : (
            <span className="text-sm text-blue-400">{actualValue}</span>
          )}
        </div>
      ) : null;
    })}
  </div>
);

const FrontCard = ({
  info,
  iconsArray,
}: {
  info: ContactInfo[];
  iconsArray: React.ReactNode[];
}) => (
  <motion.div
    className="absolute mt-40 flex h-[500px]  w-[500px] flex-col items-center justify-evenly gap-4 rounded-lg border bg-gray-950 p-4"
    style={{
      backfaceVisibility: 'hidden',
      WebkitBackfaceVisibility: 'hidden',
      transform: 'translateZ(10px)',
    }}
  >
    {info.map((contact, key) => (
      // eslint-disable-next-line react/no-array-index-key
      <ContactDetails key={key} contact={contact} />
    ))}
    <div className={'flex  gap-10'}>{iconsArray.map((icon) => icon)}</div>
  </motion.div>
);

const BackCard = () => (
  <motion.div
    className="absolute mt-40 flex h-[500px]  w-[500px]  flex-col items-center justify-center gap-4 rounded-lg border bg-gray-950 p-4"
    style={{
      backfaceVisibility: 'hidden',
      transform: 'rotateY(180deg) translateZ(5px)', // rotate it and give it half of the desired thickness
      WebkitBackfaceVisibility: 'hidden',
    }}
  >
    Contact Me
    <QRCode value={generateVCard()} size={256} />
  </motion.div>
);

export const Contact = ({ info }: { info: ContactInfo[] }) => {
  const iconsArray = useMemo(() => {
    return info.flatMap((contact) =>
      Object.entries(contact)
        .filter(([, value]) => typeof value === 'object' && value.icon)
        .map(([key, value]) => (
          <Link
            key={key}
            href={value.value}
            target="_blank"
            rel="noopener noreferrer"
            className={
              'rounded-lg !border-b-2 border-transparent bg-white bg-clip-padding p-0.5 transition-all duration-300 ease-in-out hover:rounded-b-none hover:border-green-500'
            }
          >
            <Image src={value.icon} alt={'icon'} width={50} height={50} />
          </Link>
        ))
    );
  }, [info]);

  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <motion.div
      initial={{ rotateY: 0 }}
      onClick={() => setIsFlipped(!isFlipped)}
      animate={{ rotateY: isFlipped ? 180 : 0 }}
      transition={{ duration: 0.8, ease: [0.68, -0.55, 0.27, 1.55] }} // Use an exaggerated ease for more dramatic effect
      className="relative mt-10 flex h-52  max-w-sm items-center justify-center"
      style={{ perspective: 1500, transformStyle: 'preserve-3d' }}
    >
      <FrontCard info={info} iconsArray={iconsArray} />
      <BackCard />
    </motion.div>
  );
};
