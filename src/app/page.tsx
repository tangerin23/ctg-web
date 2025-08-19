"use client";

import { useState } from "react";
import Image from "next/image";

/* ──────────────────────────────────────────────────────────────
   Header
────────────────────────────────────────────────────────────── */
function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-black/40 backdrop-blur supports-[backdrop-filter]:bg-black/30">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <h1 className="relative text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-fuchsia-300 via-pink-300 to-amber-300 bg-clip-text text-transparent tracking-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.05)]">
          複雑形質ゲノム解析分野
          <span className="pointer-events-none absolute left-0 -bottom-1 h-1 w-full rounded-full bg-gradient-to-r from-fuchsia-400 via-pink-400 to-amber-400 opacity-80" />
        </h1>
        <div className="flex items-center gap-3">
          <button className="rounded-2xl border border-white/15 bg-white/5 px-3 py-2 text-sm text-white/80 hover:bg-white/10">
            🔍 Search
          </button>
          <button className="rounded-2xl bg-gradient-to-r from-fuchsia-500 to-pink-500 px-4 py-2 text-sm font-semibold text-white shadow hover:opacity-90">
            ✨ Ask AI
          </button>
        </div>
      </div>
    </header>
  );
}

/* 共通：見出し & ユーティリティ */
function SectionTitle({ title, accent }: { title: string; accent: string }) {
  return (
    <div className="mb-10">
      <h2 className={`inline-block text-3xl md:text-4xl font-extrabold bg-gradient-to-r ${accent} text-transparent bg-clip-text`}>
        {title}
      </h2>
    </div>
  );
}
function formatDate(date: string) {
  return new Date(date).toISOString().slice(0, 10).replace(/-/g, ".");
}

/* ──────────────────────────────────────────────────────────────
   Hero
────────────────────────────────────────────────────────────── */
function HeroSection() {
  const [open, setOpen] = useState(false);

  const intro = `我々の研究室は、ゲノムやオミックスなどのヒト生体ビッグデータを遺伝統計学や学習理論に基づいて解析し、複雑形質とは何かという問いに、データ解析から迫ることを目指します。 形質とは生物の持つ性質で、個体を特徴付ける情報です。形質としては、例えば外見や性格、血液検査値、あるいは疾患などが挙げられます。数個以下の遺伝子で説明できるような形質でないものをcomplex traitと呼びます。この学術用語はわが国では多因子形質と訳されることが多いですが、あえて本分野では複雑形質と直訳することにしました。`;

  const more = `ヒトの複雑形質には遺伝性があることが知られています。我々や様々な研究者が行ったSNPアレイを用いたゲノムワイド関連解析（Genome Wide Association Study; GWAS）により、非常に多数の遺伝子制御領域のありふれた遺伝的バリアントが複雑形質に関連し、しかも複数の複雑形質は雲のように徐々に相互に関係し合っていることがわかってきました。これは、ゲノム配列の違いに基づき、細胞内ネットワークの一般的な応答性などの面において多様性が生じ、それに対する全身あるいは局所における細胞内外への環境因子の入力と相まって、最終的な形質が構成されていくということを意味しているのだと考えています。

複雑形質の研究は次のステージに入ってきており、レアバリアントやオミックスデータを統合解析していく必要があります。ありふれたバリアントの遺伝効果の検出には線形解析であるGWASが有効でしたが、これらの新しいデータには新しい解析手法が必要になると考えています。そのため、遺伝統計学の基礎に基づき、学習理論を取り込んだ新しい複雑形質の解析を目指すのが当研究分野の方向性です。 また、将来の日本においてゲノム・オミックス情報が医療現場や社会において用いられるようになってきたとき、複雑形質ゲノムという観点から理論的あるいは実践的にそれらに関わることのできる人材の育成を目指します。
。`;

  return (
    <section id="hero" className="py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
       <p className="text-sm md:text-base leading-relaxed text-white/80 whitespace-pre-line">
  {intro}
</p>

        <div className="mt-2">
          <button
            onClick={() => setOpen((v) => !v)}
            className="cursor-pointer select-none text-cyan-300 underline-offset-4 hover:underline text-sm"
            aria-expanded={open}
            aria-controls="hero-more"
          >
            {open ? "close" : "and more"}
          </button>

          {open && (
            <div
  id="hero-more"
  className="mt-3 text-sm md:text-base leading-relaxed text-white/80 whitespace-pre-line"
>
  {more}
</div>
          )}
        </div>
      </div>
    </section>
  );
}


// ──────────────────────────────────────────────────────────────
// Latest News（Publications / 
// ──────────────────────────────────────────────────────────────
function NewsSection() {

  const achievements = [
    {
      date: "2024-01-13",
      tag: "Publication",
      title: "鎌谷・小井土・史らが参画した研究グループにおいて隠れマルコフモデルのtemplate switching rates が遺伝子型インピュテーションのメトリクス値に大きな影響を与えることを発表しました。",
      link: "https://pubmed.ncbi.nlm.nih.gov/38221906/",
    },
    {
      date: "2023-12-08",
      tag: "Press",
      title: "鎌谷・小井土・賀・史らが参画した研究グループにおいて胃・十二指腸潰瘍に関連するシグナルを25の独立した遺伝的座位を新規に発見したことを発表しました",
      link: "https://www.k.u-tokyo.ac.jp/information/category/press/10660.html",
    },
  
    {
      date: "2022/10/03",
      tag: "Publication",
      title: "鎌谷・小井土・賀・史らが参画した研究グループにおいて脳卒中と各病型に関連するシグナルを89の独立した遺伝的座位において発見しそのうち61座位は新規に発見したことを発表しました。",
      link: " https://www.k.u-tokyo.ac.jp/information/category/press/9762.html",
    },
    {
      date: "2020/12/03",
      tag: "Publication",
      title: "小井土と鎌谷が参画した脳動脈瘤のゲノム解析（国際共同研究）の論文がNat Genet誌に発表されました。",
      link: " https://pubmed.ncbi.nlm.nih.gov/33199917/",
    },
  ];

  const people = [
    { date: "2025-04-01", tag: "Join", title: "新入生・新メンバーを迎えました" },
    { date: "2024-09-20", tag: "Graduate", title: "徐 逍 さんが修士修了" },
    { date: "2024-03-21", tag: "Graduate", title: "田中宏樹さん・竹内耀平さんが修士を、史　明陽さん・賀　云野さんが博士を修了しました。おめでとう！" },
  ];

  // 折りたたみ用 state
  const [openPub, setOpenPub] = useState(false);
  const [openPeople, setOpenPeople] = useState(false);

  // 初期表示 2 件、それ以降は and more
  const visibleAchievements = openPub ? achievements : achievements.slice(0, 2);
  const visiblePeople = openPeople ? people : people.slice(0, 2);

  return (
    <section id="news" className="py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle title="Latest News" accent="from-amber-300 to-rose-300" />

        <div className="grid md:grid-cols-2 gap-6">
          {/* News Release */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <h3 className="font-semibold mb-3">News Release</h3>
            <ul id="news-publications" className="space-y-3">
              {visibleAchievements.map((n) => (
                <li key={`${n.date}-${n.title}`}>
                  {n.link ? (
                    <a href={n.link} target="_blank" rel="noopener noreferrer" className="block">
                      <div className="text-sm text-white/70">
                        {formatDate(n.date)} ・ {n.tag}
                      </div>
                      <div className="font-medium hover:underline underline-offset-4">{n.title}</div>
                    </a>
                  ) : (
                    <div>
                      <div className="text-sm text-white/70">
                        {formatDate(n.date)} ・ {n.tag}
                      </div>
                      <div className="font-medium">{n.title}</div>
                    </div>
                  )}
                </li>
              ))}
            </ul>

            {achievements.length > 2 && (
              <button
                onClick={() => setOpenPub((v) => !v)}
                className="mt-4 inline-flex items-center gap-2 rounded-xl border border-white/20 px-3 py-1.5 text-xs font-semibold hover:bg-white/10"
                aria-expanded={openPub}
                aria-controls="news-publications"
              >
                {openPub ? "close" : "and more"}
              </button>
            )}
          </div>

          {/* People */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <h3 className="font-semibold mb-3">People</h3>
            <ul id="news-people" className="space-y-3">
              {visiblePeople.map((n) => (
                <li key={`${n.date}-${n.title}`}>
                  <div className="text-sm text-white/70">
                    {formatDate(n.date)} ・ {n.tag}
                  </div>
                  <div className="font-medium">{n.title}</div>
                </li>
              ))}
            </ul>

            {people.length > 2 && (
              <button
                onClick={() => setOpenPeople((v) => !v)}
                className="mt-4 inline-flex items-center gap-2 rounded-xl border border-white/20 px-3 py-1.5 text-xs font-semibold hover:bg-white/10"
                aria-expanded={openPeople}
                aria-controls="news-people"
              >
                {openPeople ? "close" : "and more"}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────
   Publications
────────────────────────────────────────────────────────────── */

function PublishSection() {
  return (
    <section id="publish" className="py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle title="Publications" accent="from-sky-300 to-emerald-300" />
        <p className="text-white/85 mb-6">
          研究成果はこちらからご覧いただけます。
        </p>
<a
  href="https://scholar.google.co.jp/citations?user=LFFeeFcAAAAJ&hl=en&oi=ao"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-sky-300 to-emerald-300 text-black font-medium rounded-xl shadow hover:opacity-90"
>
  🎓 Google Scholar Profile
</a>
      </div>
    </section>
  );
}


/* ──────────────────────────────────────────────────────────────
   Members（Prof/AssocProf: and more。Staff & Students 横並び）
────────────────────────────────────────────────────────────── */
type PersonCardProps = { name: string; role: string; photo: string; bio?: string };

function PersonCard({ name, role, photo, bio }: PersonCardProps) {
  const [open, setOpen] = useState(false);
  return (
    <article className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5">
      <div className="flex items-start gap-4">
        <Image src={photo} alt={name} width={80} height={80} className="rounded-2xl object-cover bg-slate-800" />
        <div className="min-w-0">
          <h4 className="font-bold leading-tight">{name}</h4>
          <div className="text-sm text-white/70">{role}</div>

          {bio && (
            <>
                           {!open && (
                <p className="mt-2 text-sm text-white/80 line-clamp-2 whitespace-pre-line">
                  {bio}
                </p>
              )}
              {open && (
                <p className="mt-2 text-sm text-white/80 whitespace-pre-line">
                  {bio}
                </p>
              )}

              <button
                onClick={() => setOpen((v) => !v)}
                className="mt-2 inline-flex items-center gap-2 rounded-xl border border-white/20 px-3 py-1.5 text-xs font-semibold hover:bg-white/10"
                aria-expanded={open}
              >
                {open ? "close" : "and more"}
              </button>
            </>
          )}
        </div>
      </div>
    </article>
  );
}

function MembersSection() {
  const professors: PersonCardProps[] = [
    {
      name: "教授 鎌谷 洋一郎 (Yoichiro Kamatani)",
      role: "Professor",
      photo: "/images/kamatani_pic.jpg",
      bio: "2019/6- 東京大学 新領域創成科学研究科 教授。\n2017/4–2019/6 京都大学 医学研究科 准教授。\n2015/4–2019/3 理研 統合生命医科学研究センターTL。\n2012–2014 フランスCEPH 上級研究員 等。",
    },
  ];
  const assoc: PersonCardProps[] = [
    {
      name: "准教授 小井土 大 (Masaru Koido)",
      role: "Associate Professor",
      photo: "/images/koido_pic.jpg",
      bio: "2022/4–　東京大学大学院新領域創成科学研究科 助教\n2019/12–2022/3 東京大学医科学研究所 特任助教\n2018/06–2019/12 理研 生命医科学研究センター 特別研究員\n2016/04–2018/05 横浜市立大学 特任助手 (T-CiRA Sub-PI)\n2013/04 – 2016/03 浜銀総合研究所 研究員",
    },
  ];

  const staff = [
    { name: "特任研究員 糸川　直樹 (Naoki Itokawa)", role: "Researcher" },
    { name: "特任研究員 賀 云野 (He Yunye)", role: "Researcher" },
    { name: "特任専門職員 横田 真澄 (Masumi Yokota)", role: "Staff" },
  ];
  const students = [
    "博士課程3年 劉 シン (Liu Xin)",
    "博士課程2年 竹内　耀平（Yohei Takeuchi）",
    "修士 M2 Lu Yiming",
    "修士 M1 林　文嘉（Lin Wenjia）",
    "研究生　　Luo Chenyu",
    "修士 M1　浅川　優香（Yuka Asakawa）",
    "修士 M1　北川　舜悟（Shungo Kitagawa）",
    "修士 M1　橋本　柊吾（shugo Hashimoto）",
  ];

  return (
    <section id="members" className="py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle title="Members" accent="from-green-300 to-cyan-300" />

        <h3 className="text-sm font-semibold text-white/80 mb-3">Professor</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {professors.map((m) => (
            <PersonCard key={m.name} {...m} />
          ))}
        </div>

        <h3 className="text-sm font-semibold text-white/80 mb-3">Associate Professor</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {assoc.map((m) => (
            <PersonCard key={m.name} {...m} />
          ))}
        </div>

        {/* Staff & Students 横並び */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-sm font-semibold text-white/80 mb-3">Staff</h3>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <ul className="space-y-2 text-white/90">
                {staff.map((s) => (
                  <li key={s.name}>
                    <span className="font-medium">{s.name}</span>
                    <span className="text-white/70"> — {s.role}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white/80 mb-3">Students</h3>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <ul className="list-disc pl-5 space-y-1 text-white/90">
                {students.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────
   Links
────────────────────────────────────────────────────────────── */
function LinksSection() {
  const links = [
    { 
      label: "📑 GWAS Tutorial", 
      href: "https://github.com/Cloufield/GWASTutorial", 
      desc: "First up, check this out! It’s a hands-on tutorial that walks you through the basics all the way to advanced applications in GWAS. Perfect if you want to get your feet wet or level up your skills." 
    },
    { 
      label: "🏙️ GWASLab", 
      href: "https://github.com/Cloufield/gwaslab", 
      desc: "Next, we’ve got GWASLab — a super convenient tool for handling summary statistics after your GWAS analysis. You can manage, plot, and explore your data in all sorts of useful ways." 
    },
    { 
      label: "📚Complex Trait Genetics Catalog", 
      href: "https://catalog.gwaslab.org/", 
      desc: "And finally, here’s a treasure trove: a collection of resources for complex trait genetics. It’s packed with reference data, publicly available sumstats, and all the commonly used tools you might need." 
    },
  ];

  return (
    <section id="links" className="py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle title="Links" accent="from-purple-300 to-pink-300" />

        <p className="mb-8 text-white/80 text-sm md:text-base leading-relaxed">
          Hi guys! Today I’m super excited to show you a really handy set of tools from Dr. He at the Kamatani Lab. 
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[.04] p-6 hover:bg-white/[.07] transition flex flex-col justify-between"
            >
              {/* 背景エフェクト */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-fuchsia-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition" />

              {/* タイトル＋アイコン */}
              <div className="flex items-center justify-between gap-4 mb-3">
                <div className="text-lg font-semibold text-white/95">{l.label}</div>
                <span aria-hidden className="translate-x-0 group-hover:translate-x-1 transition">↗</span>
              </div>

              {/* 説明文 */}
              <div className="text-sm text-white/70 leading-relaxed">{l.desc}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────
   Contact
────────────────────────────────────────────────────────────── */
function ContactSection() {
  return (
    <section id="contact" className="py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle title="Contact" accent="from-yellow-300 to-red-300" />
        <p className="text-white/85 whitespace-pre-line">
          {"E-mail: yokota[at]edu.k.u-tokyo.ac.jp\nAddress: 4-6-1, Shirokanedai, Minato-ku, Tokyo Japan"}
        </p>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────
   Page
────────────────────────────────────────────────────────────── */
export default function Page() {
  return (
    <main id="top" className="bg-[#0a0f1c] text-white min-h-screen">
      <Header />
      <HeroSection />
      <NewsSection />
      <PublishSection />
      <MembersSection />
      <LinksSection />
      <ContactSection />
    </main>
  );
}
