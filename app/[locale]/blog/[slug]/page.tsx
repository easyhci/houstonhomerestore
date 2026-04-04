import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { isValidLocale, type Locale } from "@/lib/i18n/config";
import { localePath } from "@/lib/i18n/localePath";
import { getBlogPosts } from "@/lib/i18n/getBlogPosts";
import QuickAnswer from "@/components/QuickAnswer";
import FAQ from "@/components/FAQ";
import AuthorBio from "@/components/AuthorBio";
import dynamic from "next/dynamic";
const WaterDamageCostEstimator = dynamic(() => import("@/components/WaterDamageCostEstimator"), { loading: () => <div className="h-96 animate-pulse bg-amber-50 rounded-2xl my-10" /> });

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  const [{ blogPosts }, { blogPostsEs }] = await Promise.all([
    import("@/data/blog-posts"),
    import("@/data/blog-posts-es"),
  ]);

  const params: { locale: string; slug: string }[] = [];

  for (const post of blogPosts) {
    params.push({ locale: "en", slug: post.slug });
  }
  for (const post of blogPostsEs) {
    params.push({ locale: "es", slug: post.slug });
  }

  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  const locale: Locale = isValidLocale(rawLocale) ? rawLocale : "en";

  const blogPosts = await getBlogPosts(locale);
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  const enUrl = `https://houstonhomerestore.com/blog/${slug}`;
  const esUrl = `https://houstonhomerestore.com/es/blog/${slug}`;
  const canonical = locale === "en" ? enUrl : esUrl;

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical,
      languages: {
        en: enUrl,
        es: esUrl,
        "x-default": enUrl,
      },
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: canonical,
      type: "article",
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { locale: rawLocale, slug } = await params;
  const locale: Locale = isValidLocale(rawLocale) ? rawLocale : "en";

  const blogPosts = await getBlogPosts(locale);
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const isEs = locale === "es";

  const ui = {
    backToBlog: isEs ? "\u2190 Blog" : "\u2190 Blog",
    editorial: isEs ? "Editorial HoustonHomeRestore" : "HoustonHomeRestore Editorial",
    relatedHeading: isEs ? "Recursos Relacionados" : "Related Resources",
    backAll: isEs ? "\u2190 Volver a todos los art\u00edculos" : "\u2190 Back to all articles",
    faqHeading: isEs ? "Preguntas Frecuentes" : "Frequently Asked Questions",
  };

  const langCode = locale === "es" ? "es" : "en";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.publishDate,
    inLanguage: langCode,
    author: { "@type": "Person", name: "Marcus Chen" },
    publisher: {
      "@type": "Organization",
      name: "HoustonHomeRestore",
      url: "https://houstonhomerestore.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        locale === "en"
          ? `https://houstonhomerestore.com/blog/${post.slug}`
          : `https://houstonhomerestore.com/es/blog/${post.slug}`,
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".quick-answer", ".llm-paragraph", "h1", "h2"],
    },
  };

  const faqSchema =
    post.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          inLanguage: langCode,
          mainEntity: post.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }
      : null;

  const homeUrl = "https://houstonhomerestore.com";
  const blogUrl =
    locale === "en"
      ? "https://houstonhomerestore.com/blog"
      : "https://houstonhomerestore.com/es/blog";
  const postUrl =
    locale === "en"
      ? `https://houstonhomerestore.com/blog/${post.slug}`
      : `https://houstonhomerestore.com/es/blog/${post.slug}`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: homeUrl },
      { "@type": "ListItem", position: 2, name: "Blog", item: blogUrl },
      { "@type": "ListItem", position: 3, name: post.title, item: postUrl },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1C1008] to-[#3D2010] text-white py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-3 text-sm">
            <Link
              href={localePath("/blog", locale)}
              className="text-amber-200 hover:text-white"
            >
              {ui.backToBlog}
            </Link>
            <span className="text-amber-400">/</span>
            <span className="bg-amber-700 text-white text-xs px-2 py-0.5 rounded">
              {post.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-3 text-amber-200 text-sm">
            <div className="w-8 h-8 bg-amber-700 text-white rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0">MC</div>
            <span>
              {new Date(post.publishDate).toLocaleDateString(
                isEs ? "es-US" : "en-US",
                { month: "long", day: "numeric", year: "numeric" }
              )}
            </span>
            <span>&middot;</span>
            <span>{post.readTime}</span>
            <span>&middot;</span>
            <span>{post.author || ui.editorial}</span>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        {/* Quick Answer */}
        <QuickAnswer answer={post.quickAnswer} />

        {/* Intro */}
        {post.intro.includes("\n\n") ? (
          post.intro.split("\n\n").map((para, i) => (
            <p key={i} className="text-gray-700 text-lg leading-relaxed mb-4">{para}</p>
          ))
        ) : (
          <p className="text-gray-700 text-lg leading-relaxed mb-8">{post.intro}</p>
        )}

        {/* Author Bio */}
        <AuthorBio locale={locale} />

        {/* Cost Estimator (for water damage cost article) */}
        {slug === "water-damage-restoration-cost-houston" && (
          <WaterDamageCostEstimator locale={locale} />
        )}

        {/* Sections */}
        {post.sections.map((section, i) => (
          <div key={i}>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">{section.heading}</h2>
              {section.content.includes("\n\n") ? (
                section.content.split("\n\n").map((para, pi) => (
                  <p key={pi} className="text-gray-700 mb-4 [&_a]:text-blue-700 [&_a]:underline [&_a]:hover:text-blue-900" dangerouslySetInnerHTML={{ __html: para }} />
                ))
              ) : (
                <p className="text-gray-700 mb-4 [&_a]:text-blue-700 [&_a]:underline [&_a]:hover:text-blue-900" dangerouslySetInnerHTML={{ __html: section.content }} />
              )}

              {section.list && (
                <ul className="space-y-2">
                  {section.list.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-gray-700">
                      <span className="text-amber-700 mt-1 flex-shrink-0 font-bold">&bull;</span>
                      <span className="[&_a]:text-blue-700 [&_a]:underline [&_a]:hover:text-blue-900" dangerouslySetInnerHTML={{ __html: item }} />
                    </li>
                  ))}
                </ul>
              )}

              {section.table && (
                <div className="overflow-x-auto mt-4">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="bg-gray-900 text-white">
                        {section.table.headers.map((h, hi) => (
                          <th
                            key={hi}
                            className={`text-left px-4 py-3 ${
                              hi === 0 ? "rounded-tl-lg" : ""
                            } ${
                              hi === section.table!.headers.length - 1
                                ? "rounded-tr-lg"
                                : ""
                            }`}
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.rows.map((row, ri) => (
                        <tr key={ri} className={ri % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                          {row.map((cell, ci) => (
                            <td
                              key={ci}
                              className="px-4 py-3 border-b border-gray-100 text-gray-800"
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
          </div>
        ))}

        {/* LLM Paragraph */}
        <article className="mb-10">
          <div className="llm-paragraph [&_a]:text-blue-700 [&_a]:underline [&_a]:hover:text-blue-900" dangerouslySetInnerHTML={{ __html: post.llmParagraph }} />
        </article>

        {/* FAQ */}
        {post.faqs.length > 0 && (
          <FAQ items={post.faqs} heading={ui.faqHeading} />
        )}

        {/* Related Links */}
        {post.relatedLinks.length > 0 && (
          <div className="mt-10 pt-6 border-t border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-3">{ui.relatedHeading}</h3>
            <div className="flex flex-wrap gap-2">
              {post.relatedLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={localePath(href, locale)}
                  className="bg-amber-50 border border-amber-200 text-amber-700 text-sm px-3 py-1.5 rounded-lg hover:bg-amber-100 transition-colors"
                >
                  {label} &rarr;
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Back */}
        <div className="mt-10 pt-6 border-t border-gray-100">
          <Link
            href={localePath("/blog", locale)}
            className="text-amber-700 hover:underline text-sm font-medium"
          >
            {ui.backAll}
          </Link>
        </div>
      </div>
    </>
  );
}
