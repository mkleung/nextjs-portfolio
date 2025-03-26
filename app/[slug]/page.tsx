import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { getArticleData, getAllSlugs } from "../../lib/articles";
import { CardHeader } from "../../components/CardHeader";
import ReactMarkdown from "react-markdown";
import { Footer } from "../../sections/Footer";
import { ContactSection } from "../../sections/ContactSection";

const Article = async ({ params }: { params: { slug: string } }) => {
  const articleData = await getArticleData(params.slug);

  return (
    <>
      <section className="mx-auto w-10/12 md:w-1/2 mt-10 mb-20 flex flex-col gap-5">
        <div className="flex justify-between">
          <Link
            href="/#blog"
            className="flex flex-row gap-1 place-items-center  border border-white/15 rounded-full bg-white/10 backdrop-blur px-4 p-1"
          >
            <ArrowLeftIcon width={20} />
            <p>Back</p>
          </Link>
          <p>{articleData.date.toString()}</p>
        </div>

        {/* <CardHeader title={articleData.title} className="md:px-0 md:pb-0" /> */}
        <h2 className="text-white mt-5 font-bold text-3xl">{articleData.title}</h2>
        <article
          className="article"
          dangerouslySetInnerHTML={{ __html: articleData.contentHtml }}
        />

        <div className="flex justify-between z-50">
          <Link
            href="/#blog"
            className="flex flex-row gap-1 place-items-center  border border-white/15 rounded-full bg-white/10 backdrop-blur px-4 p-1"
          >
            <ArrowLeftIcon width={20} />
            <p>Back</p>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
};

// Add this function to generate static paths
export async function generateStaticParams() {
  const slugs = await getAllSlugs(); // Fetch the slugs from your data source

  return slugs.map((slug: string) => ({
    slug,
  }));
}

export default Article;
