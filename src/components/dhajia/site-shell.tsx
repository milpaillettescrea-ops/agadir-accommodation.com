import { Link } from '@tanstack/react-router';
import { useState } from 'react';
import { ChevronDown, Heart, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.asset.json';
const base = 'https://dhajia-morocco.com/fr';
const stays = `${base}/collections/agadir-appartements-premium-sejours`;
const management = '/fr/pages/gestion-immobiliere-agadir';
const partnerships = `${base}/pages/investir-dans-maroc`;
const sales = `${base}/collections/biens-a-vendre`;
const whatsapp = 'https://wa.me/447342394962';
function NavDropdown({ label, links }: { label: string; links: { label: string; href: string }[] }) {
 return <details className="nav-dropdown"><summary>{label}<ChevronDown size={12}/></summary><div className="dropdown-links">{links.map(link => <span key={link.href}>{link.href === management ? <Link to="/fr/pages/gestion-immobiliere-agadir">{link.label}</Link> : <a href={link.href}>{link.label}</a>}</span>)}</div></details>;
}
export function SiteHeader({ savedCount = 0, onFavorites, activeManagement = false }: { savedCount?: number; onFavorites: () => void; activeManagement?: boolean }) {
 const [mobileMenu, setMobileMenu] = useState(false);
 return <>
   <div className="language-strip"><div className="language-inner"><select className="language-select" aria-label="Langue" defaultValue="fr" onChange={event => { if (event.target.value !== 'fr') window.location.href = `https://dhajia-morocco.com/${event.target.value === 'en' ? '' : event.target.value}`; }}><option value="fr">🇫🇷 Français</option><option value="en">🇬🇧 English</option><option value="ar">🇲🇦 العربية</option><option value="de">🇩🇪 Deutsch</option></select></div></div>
   <header className={`main-header ${activeManagement ? "management-active" : ""}`}>
    <Link to="/" aria-label="DHAJIA Morocco, accueil"><img className="logo" src={logo.url} alt="DHAJIA Morocco" /></Link>
    <nav className="desktop-nav" aria-label="Navigation principale">
     <Button variant="navigation" asChild><a href={stays}>Réserver</a></Button>
     <NavDropdown label="Propriétaires & investisseurs" links={[{label:'Gestion immobilière à Agadir',href:management},{label:'Investir au Maroc',href:partnerships}]} />
     <Button variant="navigation" asChild><a href={sales}>Biens à vendre</a></Button>
     <NavDropdown label="Découvrir Agadir" links={[{label:'Séjours à Agadir',href:stays},{label:'Activités et expériences',href:`${base}/collections/experiences`}]} />
     <NavDropdown label="Conseils" links={[{label:'Expertise d’Agadir',href:`${base}/blogs/dhajia-maroc-apercus`},{label:'Informations voyageurs',href:'#avant-votre-arrivee'}]} />
     <Button variant="navigation" asChild><a href={`${base}/pages/about-us`}>À propos de DHAJIA</a></Button>
    </nav>
    <div className="header-actions"><Button variant="iconOnly" className="header-heart" aria-label={`Mes favoris (${savedCount})`} title="Mes favoris" onClick={onFavorites}><Heart /></Button><Button variant="brand" className="header-book" asChild><a href={stays}>Réserver</a></Button><Button variant="iconOnly" className="mobile-menu-button" aria-label={mobileMenu ? 'Fermer le menu' : 'Ouvrir le menu'} aria-expanded={mobileMenu} onClick={() => setMobileMenu(!mobileMenu)}>{mobileMenu ? <X/> : <Menu/>}</Button></div>
    {mobileMenu && <nav className="mobile-nav" aria-label="Navigation mobile"><a href={stays}>Réserver</a><Link to="/fr/pages/gestion-immobiliere-agadir" onClick={() => setMobileMenu(false)}>Propriétaires & investisseurs</Link><a href={sales}>Biens à vendre</a><a href={stays}>Découvrir Agadir</a><a href="#avant-votre-arrivee" onClick={() => setMobileMenu(false)}>Conseils</a><a href={`${base}/pages/about-us`}>À propos de DHAJIA</a></nav>}
   </header>
 </>;
}
export function SiteFooter() { return <>
  <footer className="footer"><div className="footer-inner"><a className="footer-brand" href="/" aria-label="Accueil DHAJIA"><img src={logo.url} alt=""/><div className="footer-brand-name">D H A J I A<small>M O R O C C O</small></div></a><p className="footer-tagline">Hospitalité marocaine. Perspective internationale.</p><div className="footer-contact"><div><p className="eyebrow">WhatsApp international</p><a href={whatsapp}>+44 7342 394962</a></div><div><p className="eyebrow">Maroc · WhatsApp et téléphone</p><a href="tel:+212770185767">+212 770 185767</a></div><div><p className="eyebrow">Envoyez un email à notre équipe</p><a href="mailto:contact@dhajia-morocco.com">contact@dhajia-morocco.com</a></div></div><div className="footer-links"><div><p className="eyebrow">Propriétaires & investisseurs</p><Link to="/fr/pages/gestion-immobiliere-agadir">Gestion immobilière à Agadir</Link><a href={partnerships}>Investir au Maroc</a><a href={sales}>Biens à vendre</a></div><div><p className="eyebrow">Découvrir DHAJIA</p><a href={stays}>Réserver un séjour</a><a href={`${base}/blogs/dhajia-maroc-apercus`}>Guides et conseils</a><a href={`${base}/pages/about-us`}>À propos de DHAJIA</a></div><div><p className="eyebrow">Restez connecté</p><a href={whatsapp}>WhatsApp</a><a href="mailto:contact@dhajia-morocco.com">Contactez notre équipe</a></div></div><div className="footer-bottom"><span>© 2026 DHAJIA Morocco</span><div><a href={`${base}/policies/privacy-policy`}>Politique de confidentialité</a> · <a href={`${base}/policies/terms-of-service`}>Conditions générales</a></div></div></div></footer>
  <a className="whatsapp" href={whatsapp} target="_blank" rel="noreferrer"><span className="whatsapp-dot"/>WhatsApp</a>
 </>; }
