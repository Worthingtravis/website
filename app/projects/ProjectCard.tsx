import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

interface ProjectLinksProps {
  openSeaLink?: string;
  blankRasaLink?: string;
  marketingSiteLink?: string;
  date?: string;
}

export default function ProjectLinks({
  openSeaLink,
  blankRasaLink,
  marketingSiteLink,
  date,
}: ProjectLinksProps) {
  return (
    <div className="mt-5 flex w-full flex-wrap items-center justify-start gap-2 self-end">
      {(blankRasaLink || openSeaLink) && (
        <Button variant="link" asChild>
          <Link
            href={openSeaLink || blankRasaLink || '#'}
            target="_blank"
            rel="noreferrer"
          >
            {openSeaLink ? 'OpenSea' : 'Blank Rasa'}
            <ExternalLink className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      )}
      {marketingSiteLink && (
        <Button variant="link" asChild>
          <Link href={marketingSiteLink} target="_blank" rel="noreferrer">
            Marketing Site
            <ExternalLink className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      )}
      {date && <p className="text-lg">Release Date: {date}</p>}
    </div>
  );
}
