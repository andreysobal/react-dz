import './SectionSubtitle.css';

export default function SectionSubtitle({children}: {children: string}) {
	return (
		<p className='section-subtitle text-body-regular'>{children}</p>
	);
}