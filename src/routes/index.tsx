import { createFileRoute, Link } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { Heart, X, Play, Plus, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SiteHeader, SiteFooter } from '@/components/dhajia/site-shell';
import hero from '@/assets/hero.asset.json';
import owners from '@/assets/owners.asset.json';
import investment from '@/assets/investment.asset.json';
import guests from '@/assets/guests.asset.json';
import sale from '@/assets/sale.asset.json';
import tilila from '@/assets/tilila.asset.json';
import iken from '@/assets/iken.asset.json';
import hivernage from '@/assets/hivernage.asset.json';
import islane from '@/assets/islane.asset.json';
import film from '@/assets/film.asset.json';
import video from '@/assets/video-webm.asset.json';
import article1 from '@/assets/article1.asset.json';
import article2 from '@/assets/article2.asset.json';
import article3 from '@/assets/article3.asset.json';
import newsletter from '@/assets/newsletter.asset.json';

export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    { title: 'DHAJIA Morocco — Séjours et gestion de propriétés à Agadir' },
    { name: 'description', content: 'Découvrez les appartements et villas DHAJIA à Agadir. Réservation directe, équipe locale et gestion immobilière complète.' },
    { property: 'og:title', content: 'DHAJIA Morocco — Séjours à Agadir' },
    { property: 'og:description', content: 'Séjours exceptionnels. Entretien immobilier expert. Découvrez Agadir avec DHAJIA Morocco.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Index,
});
const base = 'https://dhajia-morocco.com/fr';
const stays = `${base}/collections/agadir-appartements-premium-sejours`;
const management = '/fr/pages/gestion-immobiliere-agadir';
const partnerships = `${base}/pages/investir-dans-maroc`;
const sales = `${base}/collections/biens-a-vendre`;
const whatsapp = 'https://wa.me/447342394962';
const pathways = [
  { image: owners.url, label: 'Propriétaires', title: 'Faire gérer votre bien', description: 'Stratégie de revenus, accueil, entretien du bien et suivi propriétaire.', cta: 'Parlons de votre bien', href: management },
  { image: investment.url, label: 'Partenaires sélectionnés', title: 'Explorer les partenariats', description: 'Acquisitions, rénovations et partenariats hôteliers portés par un opérateur local.', cta: 'Voir les opportunités', href: partnerships },
  { image: guests.url, label: 'Voyageurs', title: 'Réserver un séjour DHAJIA', description: 'Des appartements gérés avec soin et une assistance locale pratique.', cta: 'Voir les séjours', href: stays },
  { image: sale.url, label: 'Acheteurs', title: 'Acheter un bien à Agadir', description: 'Appartements, villas et biens commerciaux présentés avec leurs caractéristiques.', cta: 'Voir les biens', href: sales },
];
const properties = [
  { image: tilila.url, title: 'Tilila Designer - Appartement de 2 chambres avec Fibre Wi-Fi', price: '475', slug: 'luxueux-design-appartement-a-tilila-agadir-dhajia-maroc' },
  { image: iken.url, title: 'Appartement de 2 chambres Iken Gardens Agadir Bay avec jardin et piscine', price: '685', slug: 'iken-jardins-agadir-baie-2-chambres-appartement-avec-jardin-piscine' },
  { image: hivernage.url, title: "Appartement à Hivernage, Baie d’Agadir : 2 chambres à coucher, 2 salles de bains et piscine", price: '1,160', slug: 'dhajia-agadir-baie-hivernage-appartement' },
  { image: islane.url, title: 'Appartement Islane GH25, 2 chambres à coucher et 2 salles de bain, avec piscine', price: '885', slug: 'islane-hay-muhamadi-gh26-appartement' },
];
const reviews = [
 { title: 'Notre meilleur séjour au Maroc', text: 'C’est notre troisième voyage au Maroc et, sincèrement, le meilleur hébergement où nous ayons séjourné. Tout était parfait : propre, confortable, moderne et très accueillant. La terrasse sur le toit est magnifique et l’hospitalité a été exceptionnelle pendant tout notre séjour.', initials: 'V', name: 'Voyageur vérifié', source: 'Avis reçu via WhatsApp' },
 { title: 'Idéal pour les familles et les longs séjours', text: 'Nous avons passé un excellent séjour avec DHAJIA Morocco. L’appartement était impeccable, spacieux et très confortable pour notre famille. La communication était rapide, l’arrivée s’est déroulée sans difficulté et l’emplacement permettait de se déplacer facilement dans Agadir. Nous reviendrons sans hésiter.', initials: 'ET', name: 'Emma R.', source: 'Voyageur Booking.com • Séjour en famille' },
 { title: 'Appartement moderne et excellente communication', text: 'L’appartement était encore mieux en réalité que sur les photos. Tout était propre et bien préparé avant notre arrivée. Les hôtes ont été réactifs pendant tout le séjour et nous ont donné d’excellentes recommandations de restaurants et de lieux à visiter à Agadir.', initials: 'D', name: 'Daniel K.', source: 'Voyageur Airbnb • Séjour en couple' },
];
const articles = [
 { image: article1.url, title: 'Appartements de vacances familiaux à Agadir : comment choisir le bon séjour', slug: 'family-holiday-apartments-agadir' },
 { image: article2.url, title: 'Un séjour hivernal à Agadir : choisir un appartement pour deux à quatre semaines', slug: 'agadir-winter-long-stay-apartment' },
 { image: article3.url, title: 'Réservation directe ou Airbnb à Agadir : quelle est la meilleure option pour les voyageurs ?', slug: 'direct-booking-vs-airbnb-agadir' },
];
const faqs = [
 { question: 'À quelle heure ont lieu l’arrivée et le départ ?', answer: 'L’arrivée est possible à partir de 15 h et le départ doit avoir lieu avant 11 h. Des horaires flexibles peuvent être proposés selon les disponibilités.' },
 { question: 'Proposez-vous des transferts aéroport ?', answer: 'Oui. DHAJIA Morocco peut organiser un transfert fiable entre l’aéroport Agadir-Al Massira et votre appartement.' },
 { question: 'Y a-t-il un parking à proximité ?', answer: 'Les possibilités de stationnement varient selon le bien. Chaque annonce précise si un parking privé, souterrain ou à proximité est disponible.' },
 { question: 'Pouvez-vous organiser des activités à Agadir ?', answer: 'Oui. Nous pouvons organiser des balades à dos de chameau, du quad, des activités de plage, des visites locales et d’autres expériences sélectionnées à Agadir.' },
];
function PathwayLink({ href, children }: { href: string; children: React.ReactNode }) {
 return href === management ? <Link className="pathway" to="/fr/pages/gestion-immobiliere-agadir">{children}</Link> : <a className="pathway" href={href}>{children}</a>;
}
function Index() {
 const [saved, setSaved] = useState<string[]>([]);
 const [modal, setModal] = useState<'saved' | 'film' | null>(null);
 const [openFaq, setOpenFaq] = useState<number | null>(0);
 useEffect(() => {
  if (!modal) return;
  const previous = document.body.style.overflow;
  document.body.style.overflow = 'hidden';
  const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape') setModal(null); };
  document.addEventListener('keydown', onKey);
  return () => { document.body.style.overflow = previous; document.removeEventListener('keydown', onKey); };
 }, [modal]);
 const toggleSaved = (slug: string) => setSaved(current => current.includes(slug) ? current.filter(item => item !== slug) : [...current, slug]);
 return <>
  <section className="hero">
   <img className="hero-image" src={hero.url} alt="Résidence à Agadir, palmiers et piscine au coucher du soleil" fetchPriority="high" />
   <SiteHeader savedCount={saved.length} onFavorites={() => setModal('saved')}/>
   <div className="hero-content"><p className="eyebrow hero-eyebrow">DHAJIA Maroc · Séjours et gestion de propriétés</p><h1>Séjours<br/>exceptionnels.<br/>Entretien<br/>immobilier expert.</h1><p className="hero-description">Découvrez des appartements et des villas à Agadir, avec réservation directe et accompagnement local. Pour les propriétaires, gestion immobilière complète, des annonces aux séjours des voyageurs.</p><div className="hero-ctas"><Button variant="brand" asChild><a href={stays}>Réservez votre séjour</a></Button><Button variant="glass" asChild><Link to="/fr/pages/gestion-immobiliere-agadir">Laissez-nous gérer votre propriété</Link></Button></div></div>
  </section>
  <main>
   <div className="trust-strip">{[
    ['Portefeuille','20 appartements et villas','Détenus, loués et gérés'],['Airbnb','Superhost','Une hospitalité reconnue'],['Booking.com','Établissement récompensé','La reconnaissance des voyageurs'],['Opérations','Une équipe à Agadir','Présence locale et assistance voyageurs']
   ].map(([label,title,description]) => <div className="trust-item" key={label}><p className="eyebrow">{label}</p><strong>{title}</strong><small>{description}</small></div>)}</div>
   <section className="section pathway-section"><p className="eyebrow">DHAJIA Morocco</p><h2>Vos projets à Agadir, une équipe locale.</h2><p className="section-intro">Réservez un séjour, découvrez les biens à vendre ou échangez avec nos équipes propriétaires et partenariats.</p><div className="pathway-grid">{pathways.map(item => <PathwayLink href={item.href} key={item.label}><img src={item.image} alt={item.title} loading="lazy"/><div className="pathway-copy"><span className="eyebrow">{item.label}</span><h3>{item.title}</h3><p>{item.description}</p><span className="pathway-link">{item.cta} →</span></div></PathwayLink>)}</div></section>
   <section className="section" id="sejours"><p className="eyebrow">Le portefeuille DHAJIA</p><h2>Séjournez partout à Agadir</h2><div className="property-grid">{properties.map(item => <article className="property" key={item.slug}><div className="property-image"><a href={`${base}/products/${item.slug}`}><img src={item.image} alt={item.title} loading="lazy"/></a><Button variant="iconOnly" className="favorite-button" aria-label={`${saved.includes(item.slug) ? 'Retirer des' : 'Ajouter aux'} favoris : ${item.title}`} aria-pressed={saved.includes(item.slug)} title="Enregistrer ce séjour" onClick={() => toggleSaved(item.slug)}><Heart/></Button></div><p className="property-eyebrow">Séjour DHAJIA · Agadir</p><h3><a href={`${base}/products/${item.slug}`}>{item.title}</a></h3><p className="property-price">{item.price} MAD <small>/ nuit</small></p><a className="property-book" href={`${base}/products/${item.slug}`}>Vérifier les dates et réserver</a></article>)}</div></section>
   <section className="film-section"><div className="film-card"><img src={film.url} alt="Présentation d’un séjour DHAJIA" loading="lazy"/><Button variant="iconOnly" className="film-play" aria-label="Lire le film DHAJIA" title="Lire le film" onClick={() => setModal('film')}><Play/></Button><div className="film-caption"><p className="eyebrow">Inside DHAJIA</p><h2>L’hospitalité d’Agadir,<br/>en mouvement.</h2><p>Un aperçu personnel d’un séjour DHAJIA.</p><Button variant="navigation" onClick={() => setModal('film')}>Regardez le film</Button><small>1 MIN 23 SEC</small></div></div></section>
   <section className="section reviews-section"><p className="eyebrow">Avis indépendants de voyageurs</p><h2>Reconnu sur Airbnb et Booking.com</h2><p className="section-intro reviews-intro">Statut Superhost Airbnb et distinction Booking.com, confirmés par les avis des voyageurs ayant séjourné avec DHAJIA à Agadir.</p><div className="review-grid">{reviews.map(item => <article className="review" key={item.name}><div className="stars" aria-label="5 étoiles">{Array.from({length:5},(_,i) => <Star key={i}/>)}</div><h3>{item.title}</h3><blockquote>« {item.text} »</blockquote><div className="review-person"><div className="avatar">{item.initials}</div><div><span>{item.name}</span><p>{item.source}</p></div></div></article>)}</div></section>
   <section className="section"><p className="eyebrow">Guides locaux & perspectives immobilières</p><h2>Expertise d’Agadir</h2><div className="article-grid">{articles.map(item => <a className="article" key={item.slug} href={`${base}/blogs/dhajia-maroc-apercus/${item.slug}`}><img src={item.image} alt={item.title} loading="lazy"/><h3>{item.title}</h3><span className="article-link">Lire l’article →</span></a>)}</div></section>
   <section className="section faq-section" id="avant-votre-arrivee"><p className="eyebrow">Informations voyageurs</p><h2>Avant votre arrivée</h2><div className="faq-grid"><img className="faq-image" src={tilila.url} alt="Salon de l’appartement Tilila à Agadir" loading="lazy"/><div>{faqs.map((item,index) => <div className="faq-item" key={item.question}><Button variant="navigation" className="faq-question" aria-expanded={openFaq === index} aria-controls={`faq-${index}`} onClick={() => setOpenFaq(openFaq === index ? null : index)}>{item.question}{openFaq === index ? <X/> : <Plus/>}</Button>{openFaq === index && <p id={`faq-${index}`} className="faq-answer">{item.answer}</p>}</div>)}<a className="faq-whatsapp" href={whatsapp} target="_blank" rel="noreferrer">Assistance voyageurs sur WhatsApp</a></div></div></section>
   <section className="newsletter"><img className="newsletter-image" src={newsletter.url} alt="Emblème DHAJIA Morocco" loading="lazy"/><div className="newsletter-copy"><p className="eyebrow">Liste privée DHAJIA</p><h2>Nouveaux séjours.<br/>Nouveaux biens.<br/>Opportunités sélectionnées.</h2></div><form className="newsletter-form" action="https://dhajia-morocco.com/fr/contact#contact_form" method="post"><input type="hidden" name="form_type" value="customer"/><input type="hidden" name="utf8" value="✓"/><input type="hidden" name="contact[tags]" value="newsletter"/><div className="email-row"><input name="contact[email]" type="email" placeholder="Votre e-mail" aria-label="Votre e-mail" required/><Button variant="navigation" type="submit">S’inscrire</Button></div><p>Recevez des informations concises sur les nouveaux séjours DHAJIA, les ouvertures du portefeuille et des partenariats immobiliers sélectionnés à Agadir.</p></form></section>
  </main>
  <SiteFooter/>
  {modal && <div className="modal-backdrop" onClick={() => setModal(null)}><div className={`modal ${modal === 'film' ? 'video-modal' : ''}`} role="dialog" aria-modal="true" aria-label={modal === 'film' ? 'Film DHAJIA' : 'Mes séjours favoris'} onClick={event => event.stopPropagation()}><Button variant="iconOnly" className="modal-close" autoFocus aria-label="Fermer" onClick={() => setModal(null)}><X/></Button>{modal === 'film' ? <video src={video.url} controls autoPlay playsInline/> : <><h2>Mes séjours favoris</h2>{saved.length === 0 ? <p>Aucun séjour enregistré.</p> : properties.filter(item => saved.includes(item.slug)).map(item => <div className="saved-item" key={item.slug}><a href={`${base}/products/${item.slug}`}><img src={item.image} alt=""/></a><div><h3><a href={`${base}/products/${item.slug}`}>{item.title}</a></h3><p>{item.price} MAD / nuit</p></div><Button variant="iconOnly" aria-label={`Retirer ${item.title}`} onClick={() => toggleSaved(item.slug)}><X/></Button></div>)}</>}</div></div>}
 </>;
}
