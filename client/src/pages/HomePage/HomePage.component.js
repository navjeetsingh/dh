import React, { Profiler } from 'react';
import { HomePageContainer } from './HomePage.styles.js';
import Directory from '../../components/Directory/Directory.component.js';

const HomePage = () => (
	<HomePageContainer>
		<Profiler id="Directory" onRender={(id, phase,actualDuration)=>{console.log({
			id,
			phase,
			actualDuration
		})}}>
			<Directory />
		</Profiler>
	</HomePageContainer>
);

export default HomePage;
