import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';

type IMetaProps = {
  title: string;
  description: string;
  canonical?: string;
};

const Meta = (props: IMetaProps) => {
  const router = useRouter();

  const fullTitle = `${props.title} | Travis Worthing - Software Developer`;
  const fullCanonical = props.canonical
    ? `${props.canonical}`
    : `https://www.worthydev.com${router.asPath}`;

  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
          key="viewport"
        />
        <link
          rel="apple-touch-icon"
          href={`${router.basePath}/apple-touch-icon.png`}
          key="apple"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${router.basePath}/favicon-32x32.png`}
          key="icon32"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${router.basePath}/favicon-16x16.png`}
          key="icon16"
        />
        <link
          rel="icon"
          href={`${router.basePath}/favicon.ico`}
          key="favicon"
        />
      </Head>
      <NextSeo
        title={fullTitle}
        description={props.description}
        canonical={fullCanonical}
        openGraph={{
          title: fullTitle,
          description: props.description,
          url: fullCanonical,
          locale: 'en_CA',
          site_name: 'WorthyDev',
          images: [
            {
              url: 'https://avatars.githubusercontent.com/u/11166509?v=4',
              width: 1200,
              height: 630,
              alt: 'Travis Worthing, Software Developer',
              type: 'image/jpeg',
            },
          ],
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
    </>
  );
};

export { Meta };
