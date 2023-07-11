import React from "react";
import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";
import { graphql } from "relay-runtime";
import Input from "../components/Input";

// const NewsfeedQuery = graphql`
// 	query NewsfeedQuery {
// 		field {
// 			id
// 		}
// 	}
// `;
const Tab1: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle color='primary'>Tab 1</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<IonHeader collapse='condense'>
					<IonToolbar>
						<IonTitle size='large'>Tab 1</IonTitle>
					</IonToolbar>
				</IonHeader>
				<ExploreContainer name='Tab 1 page' />
				<Input type='password' label='your name' id='name' />
			</IonContent>
		</IonPage>
	);
};

export default Tab1;
