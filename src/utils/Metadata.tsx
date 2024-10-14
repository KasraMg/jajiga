interface Props {
    seoTitle: string;
    seoDescription: string;
  }
  
  export default function Metadata({ seoTitle, seoDescription }: Props) {
    return (
      <>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
      </>
    );
  }