
import React from 'react';

const articles = [
  { tag: 'Nutrition', title: 'Foods to Boost Your Immunity', desc: 'Expert advice on diet changes that can help you stay healthy during flu season.', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=600' },
  { tag: 'Lifestyle', title: 'The Benefits of Daily Walking', desc: 'How 30 minutes a day can transform your cardiovascular health and mood.', image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&q=80&w=600' },
  { tag: 'Innovation', title: 'Telemedicine: A New Era', desc: 'Understanding how remote healthcare is making access easier for patients worldwide.', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600' },
];

const HealthInsights: React.FC = () => {
  return (
    <div className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Latest Health Insights</h2>
          <a className="text-primary-600 font-semibold text-sm hover:underline" href="#">View All Articles</a>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, idx) => (
            <a key={article.title} className={`group block hover-lift animate-fade-in ${['', 'animate-delay-100', 'animate-delay-200'][idx]}`} href="#">
              <div className="aspect-video w-full overflow-hidden rounded-2xl bg-slate-200 mb-4">
                <div className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url('${article.image}')` }}></div>
              </div>
              <span className="text-xs font-bold text-primary-600 uppercase tracking-wide">{article.tag}</span>
              <h3 className="mt-2 text-xl font-bold text-slate-900 group-hover:text-primary-600 transition-colors leading-tight">{article.title}</h3>
              <p className="mt-2 text-sm text-slate-600 line-clamp-2">{article.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HealthInsights;
