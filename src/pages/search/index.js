import React from 'react';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import Template from '../../template';
import { CardList, CardItem, Card } from '../../components/CardThumbnail';
import { getSearchVideosService } from '../../services/searchVideos/searchVideosService';
import { ContextGlobal } from '../../context';
import { Form } from './styles';

export function SearchPage() {
	const { searchedVideos, setSearchedVideos } = React.useContext(
		ContextGlobal
	);
	const keyboard = React.useRef();
	const [layout, setLayout] = React.useState('default');
	const [input, setInput] = React.useState('');

	const onChange = field => {
		setInput(field);
	};

	const handleShift = () => {
		const newLayoutName = layout === 'default' ? 'shift' : 'default';
		setLayout(newLayoutName);
	};

	const onKeyPress = button => {
		if (button === '{shift}' || button === '{lock}' || button === '{enter}')
			handleShift();
	};

	const onChangeInput = event => {
		const valueIntup = event.target.value;
		setInput(valueIntup);
		keyboard.current.setInput(valueIntup);
	};

	function handleSubmitFormSearch(event) {
		event.preventDefault();

		getSearchVideosService(input).then(search =>
			setSearchedVideos(search.items)
		);
	}

	return (
		<Template>
			<Form onSubmit={handleSubmitFormSearch}>
				<Form.Input
					value={input}
					placeholder="Faça sua pesquisa..."
					onChange={onChangeInput}
					tabIndex="0"
				/>

				<Keyboard
					// eslint-disable-next-line no-return-assign
					keyboardRef={r => (keyboard.current = r)}
					tabIndex="0"
					layoutName={layout}
					onChange={onChange}
					onKeyPress={onKeyPress}
				/>
			</Form>

			<CardList>
				{searchedVideos.map(item => (
					<CardItem key={item.id.videoId}>
						<Card
							title={item.snippet.title}
							srcImage={item.snippet.thumbnails.medium.url}
							width={item.snippet.thumbnails.medium.width}
							height={item.snippet.thumbnails.medium.height}
							params={{
								pathname: '/watch',
								videoId: item.id.videoId,
							}}
						/>
					</CardItem>
				))}
			</CardList>
		</Template>
	);
}
