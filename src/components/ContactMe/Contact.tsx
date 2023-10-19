import { motion } from 'framer-motion';
import Link from 'next/link';
import clsx from 'clsx';

import Image from 'next/image';
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
  <div className="mx-auto  flex w-full flex-col items-center space-y-2 rounded bg-gray-950/20 p-2">
    {Object.entries(contact).map(([key, value]) => {
      if (key === 'Time Zone' && value.isTimeZone) {
        const timeZone = value.value;
        const zoneName = getTimeZoneNameFromAbbr(timeZone);
        const nowInZone = utcToZonedTime(new Date(), zoneName);
        const formattedTime = format(nowInZone, 'hh:mm a', {
          timeZone: zoneName,
        });

        return (
          <div key={key} className="flex w-full justify-between space-x-2">
            <span className="text-sm text-white">Local Time:</span>
            PST
            <span className="text-sm text-blue-400">{formattedTime}</span>
          </div>
        );
      }

      const isLink = typeof value === 'object' && value.isLink;
      const actualValue = isLink ? value.value : value;
      const hasIcon = typeof value === 'object' && value.icon;

      return !hasIcon ? (
        <div key={key} className="flex w-full justify-between space-x-2">
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

export const Socials = ({
  info,
  iconClass,
  imageClass,
}: {
  info: ContactInfo[];
  iconClass?: string;
  imageClass?: string;
}) => {
  return (
    <>
      {info.flatMap((contact) =>
        Object.entries(contact)
          .filter(([, value]) => typeof value === 'object' && value.icon)
          .map(([key, value]) => (
            <Link
              key={key}
              href={value.value}
              target="_blank"
              rel="noopener noreferrer"
              className={clsx(
                'flex items-center justify-center gap-1 rounded bg-white text-sm outline-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white/90',
                iconClass
              )}
            >
              <Image
                src={value.icon}
                alt={'icon'}
                width={50}
                height={50}
                className={clsx(imageClass)}
              />
            </Link>
          ))
      )}
    </>
  );
};

export const Contact = ({ info }: { info: ContactInfo[] }) => {
  return (
    <motion.div className="relative z-10 mt-10 flex  items-start justify-center">
      <motion.div className="  flex flex-col  items-center  gap-4 rounded-lg border  bg-gray-950/90 p-4 md:flex-row">
        <div className="flex  items-center gap-2 bg-gray-950/20 p-3">
          {info.map((contact, key) => (
            // eslint-disable-next-line react/no-array-index-key
            <ContactDetails key={key} contact={contact} />
          ))}

          <div
            className={
              'flex h-full flex-col content-between justify-between gap-2 transition-opacity duration-500 ease-in-out'
            }
          >
            <Socials
              info={info}
              iconClass={'w-10 opacity-80  hover:opacity-100'}
            />
          </div>
        </div>

        <QRCode
          value={generateVCard()}
          size={256}
          className={'rounded-lg border-2 border-white '}
        />
      </motion.div>
    </motion.div>
  );
};
