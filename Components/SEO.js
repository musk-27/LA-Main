// components/SEO.js

// components/SEO.js

const SEO = ({ metaTitle, description }) => {
  return (
    <>
      <title>{metaTitle}</title>
      <meta name="description" content={description} />
    </>
  );
};

export default SEO;

