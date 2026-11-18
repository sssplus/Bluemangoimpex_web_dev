import { Link } from 'react-router';
import { ArrowUpRight, Ruler, FileCheck2, ShieldCheck, Ship } from 'lucide-react';
import { factoryImage } from '@/data/company';

const trustBadges = [
	{ Icon: Ruler, label: 'Custom CAD Drawings' },
	{ Icon: FileCheck2, label: 'EN 10204 3.1 Mill Test Certificates' },
	{ Icon: ShieldCheck, label: '3rd-Party Inspection (SGS/BV/TUV)' },
	{ Icon: Ship, label: 'Multi-Commodity FCL/LCL Cargo' },
];

export function Hero() {
	return (
		<section className="hero">
			<img
				src={factoryImage}
				width={1344}
				height={768}
				alt="Industrial valves and forged flanges in an engineering workshop"
				fetchPriority="high"
			/>
			<div className="hero-shade" />
			<div className="hero-content">
				<p className="eyebrow light">
					<span /> FROM INDIA. FOR GLOBAL INDUSTRY.
				</p>
				<h1>
					Precision Engineering Goods &amp; Heavy Machinery
					<br /> for Global Markets.
				</h1>
				<p className="hero-description">
					Sourced from ISO-certified Indian manufacturers — industrial valves, forged flanges,
					roller bearings, construction machinery, electrical T&amp;D hardware and commercial
					vehicle spares — supplied to your specification and supported for international delivery.
				</p>
				<div className="hero-actions">
					<Link to="/products" className="button">
						Explore Engineering Catalogue <ArrowUpRight size={19} />
					</Link>
					<Link to="/contact" className="outline-button">
						Submit Custom Drawing / RFQ <ArrowUpRight size={19} />
					</Link>
				</div>
			</div>
			<div className="hero-trust">
				{trustBadges.map(({ Icon, label }) => (
					<span key={label}>
						<Icon size={22} strokeWidth={1.5} />
						{label}
					</span>
				))}
			</div>
		</section>
	);
}
