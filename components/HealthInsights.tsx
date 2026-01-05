
import React from 'react';

const articles = [
  {
    tag: 'Nutrition',
    title: 'Foods to Boost Your Immunity',
    desc: 'Expert advice on diet changes that can help you stay healthy during flu season. Learn which superfruits and vegetables are essential.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=600',
    readTime: '5 min read'
  },
  {
    tag: 'Lifestyle',
    title: 'The Benefits of Daily Walking',
    desc: 'How 30 minutes a day can transform your cardiovascular health and mood. Discover the science behind consistent movement.',
    image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&q=80&w=600',
    readTime: '4 min read'
  },
  {
    tag: 'Innovation',
    title: 'Telemedicine: A New Era',
    desc: 'Understanding how remote healthcare is making access easier for patients worldwide. Explore the latest digital health technologies.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600',
    readTime: '6 min read'
  },
];

const HealthInsights: React.FC = () => {
  return (
    <div className="bg-slate-50 py-32 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary-100/40 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-blue-100/30 rounded-full blur-[100px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6 animate-fade-in">
          <div className="max-w-xl">
            {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 border border-primary-100 mb-4">
              <span className="flex h-1.5 w-1.5 rounded-full bg-primary-600 animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-primary-600">Stay Informed</span>
            </div> */}
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Latest Health <span className="text-primary-600">Insights</span></h2>
            <p className="mt-4 text-slate-500 text-lg leading-relaxed">
              Explore professional advice and the latest medical breakthroughs curated by our team of experts.
            </p>
          </div>
          <a className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-slate-200 text-slate-700 font-semibold text-sm hover:border-primary-600 hover:text-primary-600 transition-all shadow-sm hover:shadow-md" href="#">
            View All Articles
            <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
          </a>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, idx) => (
            <article
              key={article.title}
              className="group flex flex-col bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-soft hover:shadow-xl-soft transition-all duration-500 animate-slide-up"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <div
                  className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${article.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-bold text-primary-700 uppercase tracking-wider shadow-sm">
                    {article.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 p-8 flex flex-col">
                <div className="flex items-center gap-3 mb-4 text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[14px]">schedule</span>
                    {article.readTime}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-slate-300" />
                  <span>By Lifecare Experts</span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-primary-600 transition-colors leading-snug mb-3">
                  {article.title}
                </h3>

                <p className="text-slate-500 leading-relaxed line-clamp-3 mb-8">
                  {article.desc}
                </p>

                <div className="mt-auto">
                  <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-primary-600 group/link">
                    <span className="relative">
                      Read more
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all group-hover/link:w-full" />
                    </span>
                    <span className="material-symbols-outlined text-sm transition-transform group-hover/link:translate-x-1">arrow_forward</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HealthInsights;
