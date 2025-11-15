import { notFound } from 'next/navigation';
import Link from 'next/link';

const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://triumfous.mobel.us/api';

export const revalidate = 60;

function formatDate(dateLike) {
	if (!dateLike) return '';
	try {
		const d = new Date(dateLike);
		return d.toLocaleDateString('en-CA');
	} catch {
		return '';
	}
}
export async function generateMetadata({ params }) {
  const resolvedParams = await params; 
  const slug = resolvedParams?.slug;

  if (!slug || typeof slug !== "string") { 
  	console.error("Slug is missing or invalid:", slug); 
  	return { 
  		title: "Blog Detail", 
  		description: "Invalid blog slug",

  		 }; 
  	}

  //const apiUrl = https://triumfous.mobel.us/api/blog/${encodeURIComponent(slug)}/;

  const apiUrl = `https://triumfous.mobel.us/api/blog/${encodeURIComponent(slug)}/`;

  const res = await fetch(apiUrl, { next: { revalidate: 300 } });
  if (!res.ok) {
    console.error("Metadata fetch failed:", res.status, apiUrl);
    return {
      title: "Blog Detail",
      description: "Unable to load blog data",
    };
  }

  const json = await res.json();
  const blog = json?.data?.blog;

  if (!blog) {
    return {
      title: "Blog Detail",
      description: "Blog data not found",
    };
  }
  //console.log(blog.blogimg);
  const nblogimg = blog.blogimg;
  const cleanDescription = blog.metadesc
    ? blog.metadesc.replace(/<[^>]*>/g, "").slice(0, 150)
    : "Blog details";

  return {
  title: blog.meta_title || blog.blogtitle || "Blog Detail",
  description: cleanDescription,
  alternates: {
    canonical: `https://www.triumfo.us/blog/${slug}/`,
  },
  openGraph: {
    title: blog.meta_title || blog.blogtitle || "Blog Detail",
    description: cleanDescription,
    url: `https://www.triumfo.us/blog/${slug}/`,
    siteName: "Triumfo Inc.",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `https://triumfous.mobel.us/api/images/uploads/blog/${nblogimg}`,
        width: 1024,
        height: 570,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@triumfoinc",
    creator: "@triumfoinc",
    title: blog.meta_title || blog.blogtitle || "Blog Detail",
    description: cleanDescription,
    images: [
      `https://triumfous.mobel.us/api/images/uploads/blog/${blog.blogimg}`,
    ],
  },
};
}






export default async function BlogDetail(props) {
  const params = await props.params; 
  const slug = params?.slug;
  if (!slug || typeof slug !== 'string') return notFound();

  let blog = null;
  let latest = [];

  try {
  const res = await fetch(`${apiBase}/blog/${encodeURIComponent(slug)}`, { cache: 'no-store' });
  if (!res.ok) return notFound();
  const json = await res.json();
  blog = json?.data?.blog || null;
  latest = Array.isArray(json?.data?.latest) ? json.data.latest : [];
} catch {
  return notFound();
}

  if (!blog) return notFound();

  const title = blog.blogtitle || slug;
  const dateText = formatDate(blog.created_at || blog.updated_at);
  const heroSrc = blog.blogimg ? `${apiBase}/images/uploads/blog/${blog.blogimg}` : '/images/blog1.webp';
  const contentHtml = blog.blogdesc || '';
	
	return (
		<>
			<section>
				<div className="bannerbg bg-[#fff]">
					<div className="container mx-auto px-4">
						<img src={heroSrc} width="1024" height="570" alt={blog.alttag || title} className="w-full h-auto"/>
					</div>
				</div>
			</section>
			<div className="infoline">
				<div className="container mx-auto px-4">
					<h1 className="maintitle text-gray-700 my-6">{title}</h1>
					<div className="flex gap-2 items-center justify-between my-4 border-t border-gray-300 py-2">
						<span className="text-sm text-gray-700 font-semibold">{dateText}</span>
						<span className="text-sm text-gray-700 font-bold">By: Triumfo Inc.</span>
					</div>
				</div>
			</div>
			<section>
				<div className="contentbg py-10">
					<div className="container mx-auto px-4">
						<div className="blog-content max-w-none text-gray-500 text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: contentHtml }} />
					</div>
				</div>
			</section>
			<section>
				<div className="ctaction bg-[#E7EEF7] py-10">
					<div className="container mx-auto px-4">
						<div className="bg-gray-900 text-white rounded-xl p-6 md:p-10 mx-4 md:mx-auto max-w-7xl my-10">
							<div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
								<div>
									<h2 className="text-xl md:text-4xl font-semibold mb-3 barlofamilty">
										Ready to plan your next show?
									</h2>
									<p className="text-sm md:text-base text-gray-300">
										Tell us your goals — we'll recommend the ideal booth solution.
									</p>
								</div>
								<div className="flex flex-col sm:flex-row gap-3 shrink-0 text-center">
									<Link href="tel:+1 775 927 6412" className="px-5 py-4 rounded-md bg-white text-gray-900 text-l font-medium hover:bg-gray-100 transition">
                    Call Us
                  </Link>
									<Link href="/contact-us/" className="px-5 py-4 rounded-md bg-custom text-white text-l font-medium hover:bg-red-600 transition">
										Get a Quote
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<style>
			{`
				.blog-content a,
				.blog-content a:hover {
				    color: #2563eb
				}
				.blog-content ul,
				.blog-content ol {
				    display: block;
				    margin: 1rem 0;
				    padding-left:0;
				}
				.blog-content ol li,
				.blog-content ul li {
				    display: block;
				    padding-left: 30px;
				    color: #414141;
				    position: relative;
				    font-size: 0.95rem;
				    line-height: 1.5;
				    margin-bottom: 0.5rem;
				    text-align: justify;
				}
				.blog-content ol li::after,
				.blog-content ul li::after {
				    display: inline-block;
				    position: absolute;
				    width: 12px;
				    height: 12px;
				    background: 0 0;
				    top: 5px;
				    left: 0;
				    border: 2px solid #c22c2b;
				    border-radius: 50%;
				    transition: 250ms ease-in-out;
				    text-decoration: none;
				    color: #fff0;
				    content: "";
				    transform: rotate(145deg);
				}
				 .blog-content table{
				    width: 100% !important;
				    margin-bottom: 10px;
				}
				.blog-content table tr:nth-child(odd) {
				    background: #f4f4f4;
				}
				.blog-content table td {
				    font-size: 17px;
				    line-height: 30px;
				    color: #414141 !important;
				    text-align: center;
				}
				table,
				td,
				th {
				    border: 1px solid #000;
				}
			`}
			</style>
		</>
	);
}
