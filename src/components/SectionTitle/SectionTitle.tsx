import './SectionTitle.css';

export default function SectionTitle({children}: {children: string}) {
	return (
		<h1 className='section-title text-h1'>{children}</h1>
	);
}