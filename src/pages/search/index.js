import React from 'react';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import Template from '../../template';
import { CardList, CardItem, Card } from '../../components/CardThumbnail';
import { getSearchVideosService } from '../../services/searchVideos/searchVideosService';
import { ContextGlobal } from '../../context';
import { Form } from './styles';
import { Feedback } from '../../components/Feedback';
import FeedbackSearch from '../../assets/images/search.svg';
import { Loader } from '../../components/Loader';

export function SearchPage() {
	const { searchedVideos, setSearchedVideos } = React.useContext(
		ContextGlobal
	);
	const keyboard = React.useRef();
	const [layout, setLayout] = React.useState('default');
	const [input, setInput] = React.useState('');
	const [keyBoardStatus, setkeyBoardStatus] = React.useState(false);
	const [loader, setLoader] = React.useState(false);

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
		setLoader(true);

		getSearchVideosService(input).then(search => {
			setSearchedVideos(search.items);
			setLoader(false);
			setkeyBoardStatus(false);
		});
	}

	return (
		<Template>
			<Form onSubmit={handleSubmitFormSearch}>
				<Form.Input
					value={input}
					placeholder="Digíte sua pesquisa..."
					onChange={onChangeInput}
					onFocus={() => setkeyBoardStatus(true)}
					tabIndex="0"
				/>

				{keyBoardStatus && (
					<>
						<Keyboard
							// eslint-disable-next-line no-return-assign
							keyboardRef={r => (keyboard.current = r)}
							tabIndex="0"
							layoutName={layout}
							onChange={onChange}
							onKeyPress={onKeyPress}
						/>
					</>
				)}
			</Form>

			{searchedVideos.length === 0 && input.length === 0 && (
				<Feedback
					urlImage={FeedbackSearch}
					description="Você não realizou nenhuma pesquisa"
				/>
			)}

			{loader && <Loader />}

			<CardList>
				{searchedVideos.length !== 0 &&
					searchedVideos.map(item => (
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
