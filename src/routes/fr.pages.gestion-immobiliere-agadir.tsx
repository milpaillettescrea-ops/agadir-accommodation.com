import { createFileRoute, Link } from '@tanstack/react-router';
import { useEffect, useRef, useState } from 'react';
import { Home, Play, Plus, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SiteHeader, SiteFooter } from '@/components/dhajia/site-shell';
import { managementContent } from '@/components/dhajia/management-content';
import interior from '@/assets/gestion-interior.png.asset.json';
import poster from '@/assets/gestion-film.jpg.asset.json';
import video from '@/assets/gestion-film.mp4.asset.json';

export const Route = createFileRoute('/fr/pages/gestion-immobiliere-agadir')({
 head: () => ({ meta: [
  { title: 'Gestion immobilière à Agadir | Appartements et villas | DHAJIA Morocco' },
  { name: 'description', content: 'Gestion locative à Agadir pour les propriétaires au Maroc et à l’étranger : annonces, réservations, accueil, ménage et entretien avec DHAJIA Morocco.' },
  { property: 'og:title', content: 'Gestion immobilière à Agadir — DHAJIA Morocco' },
  { property: 'og:description', content: 'Votre appartement ou villa à Agadir, géré professionnellement. Découvrez nos modèles de gestion et demandez une étude de votre bien.' },
  { property: 'og:type', content: 'website' },
  { name: 'twitter:card', content: 'summary_large_image' },
 ] }),
 component: ManagementPage,
});
const base = 'https://dhajia-morocco.com/fr';
const whatsapp = 'https://wa.me/447342394962?text=Salam%20DHAJIA%20Morocco%2C%20I%20would%20like%20a%20review%20of%20my%20Agadir%20property.';
function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
 return <header className="management-section-heading"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></header>;
}
function ManagementPage() {
 const [modal, setModal] = useState<'film' | 'saved' | null>(null);
 const [openFaq, setOpenFaq] = useState<number | null>(null);
 const filmButton = useRef<HTMLButtonElement>(null);
 useEffect(() => {
  if (!modal) return;
  const previous = document.body.style.overflow;
  document.body.style.overflow = 'hidden';
  const key = (e: KeyboardEvent) => { if (e.key === 'Escape') setModal(null); };
  document.addEventListener('keydown', key);
  return () => { document.body.style.overflow = previous; document.removeEventListener('keydown', key); if (modal === 'film') filmButton.current?.focus(); };
 }, [modal]);
 return <>
  <div className="interior-header"><SiteHeader onFavorites={() => setModal('saved')} activeManagement/></div>
  <div className="management-breadcrumb"><Link to="/"><Home size={14}/>Maison</Link><span>/</span><span>Gestion immobilière Agadir | DHAJIA Maroc</span></div>
  <main className="management-page">
   <section className="management-hero">
    <div className="management-hero-copy"><p className="eyebrow">Pour les propriétaires à Agadir, au Maroc et à l’étranger</p><h1>Gestion immobilière à Agadir pour les propriétaires d'appartements et de villas</h1><p className="management-lead">Vous vivez en France ou ailleurs et possédez un bien à Agadir ? DHAJIA prend en charge sa gestion locative au quotidien : annonces sur Airbnb, Booking.com et Vrbo, réservations, accueil des voyageurs, ménage et entretien. La gestion s’effectue selon un pourcentage convenu ; un bail à loyer fixe peut être envisagé pour certains biens, après étude.</p><div className="management-actions"><Button variant="brand" className="management-button" asChild><a href="#dhajia-owner-review">Parlez-nous de votre bien immobilier</a></Button><Button variant="outline" className="management-button" asChild><a href="#DhajiaOwnerModels">Comparer les options de gestion</a></Button></div></div>
    <div className="management-hero-media"><img src={interior.url} alt="Un appartement géré par DHAJIA Maroc à Agadir" fetchPriority="high"/><div className="management-media-note"><p className="eyebrow">Une équipe locale · Des responsabilités claires</p><strong>Votre bien. Géré professionnellement.</strong></div></div>
   </section>
   <section className="management-proof" aria-label="Les services DHAJIA en bref">{[['Propriétés','Appartements et villas'],['Propriétaires','Au Maroc et à l’étranger'],['Service','Réservations, voyageurs et entretien'],['Approche','Conditions convenues. Responsabilités claires.']].map(([label,title]) => <div key={label}><p className="eyebrow">{label}</p><strong>{title}</strong></div>)}</section>
   <section className="management-film"><Button ref={filmButton} variant="navigation" className="management-film-cover" aria-haspopup="dialog" aria-label="Voir le film DHAJIA sur l’immobilier" onClick={() => setModal('film')}><img src={poster.url} alt="Un présentateur de DHAJIA en bleu parle de l’immobilier à Agadir" loading="lazy"/><span className="management-film-play"><Play/></span><span className="management-film-copy"><span className="eyebrow">DHAJIA Maroc</span><span className="management-film-title">Le regard<br/>d’un propriétaire.</span><span className="management-film-intro">Hay Mohammadi et l’immobilier en bord de mer à Agadir.</span><span className="management-film-watch">Voir le film <small>56 s</small></span></span></Button></section>
   <section className="management-intro"><div><p className="eyebrow">Une équipe locale pour votre propriété</p><h2>Votre bien à Agadir. Vous restez informé, où que vous viviez.</h2></div><div><p>Vous n'avez pas à répondre à chaque message des clients, coordonner chaque calendrier ou organiser chaque arrivée et faire le nettoyage vous-même. DHAJIA gère l'opération quotidienne convenue à Agadir et vous tient informé où que vous soyez.</p><p>Nous étudions votre appartement ou villa avant de recommander un modèle de gestion, en tenant compte de son emplacement, de son état, du règlement de copropriété, des préparatifs nécessaires et de vos priorités.</p></div></section>
   <section className="management-section" id="DhajiaOwnerModels"><SectionHeading eyebrow="Moyens de travailler avec DHAJIA" title="Deux modèles. Un engagement pour l'entretien des propriétés."/><div className="management-cards management-models">{managementContent.models.map((item,i) => <article key={item.title}><span className="eyebrow">0{i+1}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div><p className="management-disclaimer">Les frais de gestion, les coûts d'exploitation et les responsabilités sont convenus avant le lancement. Le loyer garanti n'est disponible que pour les propriétés acceptées dans le cadre d'un bail écrit ; le revenu sous gestion à pourcentage varie en fonction des réservations, des tarifs et des coûts.</p><Button variant="outline" className="management-button" asChild><a href="#dhajia-owner-review">Trouvez le bon modèle pour votre propriété</a></Button></section>
   <section className="management-section"><SectionHeading eyebrow="Gestion immobilière à service complet" title="Du lancement de l'annonce à chaque séjour des clients, nous coordonnons l'opération."/><div className="management-cards management-services">{managementContent.services.map((item,i) => <article key={item.title}><span className="eyebrow">0{i+1}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></section>
   <section className="management-process"><div><p className="eyebrow">Comment ça marche</p><h2>Un parcours clair de la demande à l'opération.</h2><p>Chaque prise en charge commence par une étude du bien et un accord sur les responsabilités de chacun.</p></div><ol>{managementContent.steps.map((item,i) => <li key={item.title}><span className="eyebrow">0{i+1}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></li>)}</ol></section>
   <section className="management-section management-faq"><SectionHeading eyebrow="Vos questions" title="Une image plus claire avant de décider."/>{managementContent.faqs.map((item,i) => <div className="faq-item" key={item.question}><Button variant="navigation" className="faq-question" aria-expanded={openFaq === i} aria-controls={`owner-faq-${i}`} onClick={() => setOpenFaq(openFaq === i ? null : i)}>{item.question}{openFaq === i ? <X/> : <Plus/>}</Button>{openFaq === i && <p className="faq-answer" id={`owner-faq-${i}`}>{item.answer}</p>}</div>)}</section>
   <section className="management-enquiry" id="dhajia-owner-review"><div><p className="eyebrow">Possédez-vous un appartement ou une villa à Agadir ?</p><h2>Parlez-nous de votre bien.</h2><p>Partagez quelques détails afin que nous puissions examiner votre bien et discuter de la gestion à pourcentage ou d'un bail à loyer garanti, là où c'est approprié.</p><div className="management-direct"><h3>Préférez-vous nous contacter directement ?</h3><a href="mailto:contact@dhajia-morocco.com">Écrire à DHAJIA</a><a href={whatsapp} target="_blank" rel="noreferrer">Contacter l’équipe propriétaires sur WhatsApp</a><a href={`${base}/collections/agadir-appartements-premium-sejours`}>Découvrez les séjours DHAJIA</a></div></div>
    <form action={`${base}/contact#dhajia-owner-review-form`} method="post" acceptCharset="UTF-8"><input type="hidden" name="form_type" value="contact"/><input type="hidden" name="utf8" value="✓"/><input type="hidden" name="contact[Enquiry type]" value="Demande de gestion — propriétaire"/><input type="hidden" name="contact[Source page]" value={`${base}/pages/gestion-immobiliere-agadir`}/><p className="management-form-note">Votre nom et votre adresse e-mail sont obligatoires. Précisez l’emplacement de votre bien et votre pays de résidence dans votre message.</p><div className="management-fields">
     <label htmlFor="owner-name">Votre nom *<input id="owner-name" name="contact[name]" autoComplete="name" required/></label>
     <label htmlFor="owner-email">Adresse e-mail *<input id="owner-email" name="contact[email]" type="email" autoComplete="email" required/></label>
     <label htmlFor="owner-phone">Téléphone ou WhatsApp (optionnel)<input id="owner-phone" name="contact[phone]" type="tel" autoComplete="tel"/></label>
     <label htmlFor="owner-area">Localisation du bien ou zone préférée (optionnelle)<input id="owner-area" name="contact[Property area]" placeholder="Par exemple : Agadir Bay, Haut Founty ou un autre quartier"/></label>
     <label htmlFor="owner-type">Type de bien (optionnel)<select id="owner-type" name="contact[Property type]"><option value="">Veuillez sélectionner</option><option>Appartement</option><option>Villa</option><option>Plusieurs propriétés</option><option>Pas encore sûr</option></select></label>
     <label htmlFor="owner-bedrooms">Nombre de chambres (facultatif)<input id="owner-bedrooms" name="contact[Bedrooms]" type="number" inputMode="numeric" min="0" max="50" step="1"/></label>
     <label className="management-field-wide" htmlFor="owner-model">Arrangement préféré (optionnel)<select id="owner-model" name="contact[Preferred arrangement]"><option value="">Veuillez sélectionner</option><option>Gestion avec commission convenue</option><option>Loyer fixe — sous réserve d’acceptation</option><option>Aidez-moi à choisir</option></select></label>
     <label className="management-field-wide" htmlFor="owner-photos">Lien vers les photos du bien immobilier (optionnel)<input id="owner-photos" name="contact[Photo link]" type="url" inputMode="url" placeholder="https://"/></label>
     <label className="management-field-wide" htmlFor="owner-body">Autre chose que nous devrions savoir ? (optionnel)<textarea id="owner-body" name="contact[body]" rows={4} placeholder="Votre pays de résidence, état du bien, disponibilité, nombre de biens et questions"/></label>
    </div><p className="management-form-note">Ces informations seront utilisées pour répondre à votre demande. <a href={`${base}/policies/privacy-policy`}>Politique de confidentialité</a></p><Button variant="brand" className="management-button" type="submit">Demander une étude de mon bien</Button></form>
   </section>
  </main><SiteFooter/>
  {modal && <div className="modal-backdrop" onClick={() => setModal(null)}><div className={`modal ${modal === 'film' ? 'video-modal' : ''}`} role="dialog" aria-modal="true" aria-label={modal === 'film' ? 'Le regard de DHAJIA sur l’immobilier' : 'Mes séjours favoris'} onClick={e => e.stopPropagation()}><Button variant="iconOnly" className="modal-close" aria-label="Fermer" autoFocus onClick={() => setModal(null)}><X/></Button>{modal === 'film' ? <video src={video.url} poster={poster.url} controls autoPlay playsInline/> : <><h2>Mes séjours favoris</h2><p>Aucun séjour enregistré.</p></>}</div></div>}
 </>;
}
