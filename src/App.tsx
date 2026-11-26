import Button from './components/Button/Button.tsx';
import './App.css';
import SectionTitle from './components/SectionTitle/SectionTitle.tsx';
import SectionSubtitle from './components/SectionSubtitle/SectionSubtitle.tsx';

function App() {
	const headerContent = {
		title: 'Поиск',
		subtitle: 'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.',
		btnText: 'Искать'
	};

	return (
		<header className="page-header">
			<SectionTitle>{headerContent.title}</SectionTitle>
			<SectionSubtitle>{headerContent.subtitle}</SectionSubtitle>
			<Button>{headerContent.btnText}</Button>
		</header>
	);
}

export default App;
