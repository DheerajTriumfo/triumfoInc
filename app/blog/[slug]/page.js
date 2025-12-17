import { notFound } from 'next/navigation';
import Link from 'next/link';
import { buildMetadata } from '../../../lib/seo';

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
    ? blog.metadesc.replace(/<[^>]*>/g, "").slice(0, 250)
    : "Blog details";

  const image = nblogimg
    ? `https://triumfous.mobel.us/api/images/uploads/blog/${nblogimg}`
    : undefined;
  const title = blog.meta_title || blog.blogtitle || "Blog Detail";

  return await buildMetadata({
    title,
    description: cleanDescription,
    image,
    pathname: `/blog/${slug}/`,
    openGraph: {
      type: "article",
      images: image
        ? [
            {
              url: image,
              width: 1024,
              height: 570,
              alt: title,
            },
          ]
        : undefined,
    },
  });
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
									<Link href="https://wa.me/17029340798" target="_blank" rel="noopener noreferrer" className="px-5 py-4 rounded-md text-white text-l font-medium hover:opacity-90 transition flex items-center justify-center gap-2" style={{ backgroundColor: '#0CC143' }}>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    <span>WhatsApp</span>
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
				.blog-content .table-responsive {
				  width: 100%;
				  overflow-x: auto;
				  -webkit-overflow-scrolling: touch;
				}
				 .blog-content table{
				    width: auto;
				    margin-bottom: 10px;
				    border-collapse: collapse;
				    cell-padding:0 !important;
				    cell-spacing:0 !important;
				}
				.blog-content table tr:nth-child(odd) {
				    background: #f4f4f4;
				}
				.blog-content table td {
				    font-size: 17px;
				    line-height: 30px;
				    color: #414141 !important;
				}
				table,
				td,
				th {
				    border: 1px solid #000;
				    padding:0.4rem 0.8rem;
				}
				@media (max-width: 768px) {
				  .blog-content table {
				    display: block;
				    overflow-x: auto;
				    white-space: nowrap;
				    max-width: 100%;
				  }
				}
			`}
			</style>
		</>
	);
}
