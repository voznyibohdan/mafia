import React, {useState} from 'react';

import { useDispatch, useSelector } from "react-redux";
import Button from "./components/button/button.jsx";
import RoleInput from "./components/role-input/role-input.jsx";
import AdditionalRoles from "./components/additional-roles/additional-roles.jsx";
import Timer from "./components/timer/timer.jsx";
import RolesPreviewList from "./components/roles-preview-list/roles-preview-list.jsx";
import {setGameStarted} from "./store/game.js";
import {shuffle} from "./utils/shuffleRoles.js";

function App() {
	const { civilians, mafias, roles } = useSelector((state) => state.roles);
	const isGameStarted = useSelector((state) => state.game.isGameStarted);
	const dispatch = useDispatch();

	const allRoles = [...civilians, ...mafias, ...roles];

	const [rolesPreviewList, setRolesPreviewList] = useState([]);
	const [isInputsDisabled, setIsInputsDisabled] = useState(false);

	const handleGenerateRoles = () => {
		setRolesPreviewList(shuffle(allRoles));
	}

	const handleGameStarted = () => {
		dispatch(setGameStarted());

		setIsInputsDisabled(true);
	}

	return (
		<div className="App">
			<div className="container">

				<RoleInput disabled={isInputsDisabled} label={'Мирні жителі'} />
				<RoleInput disabled={isInputsDisabled} label={'Мафія'} />

				<AdditionalRoles disabled={isInputsDisabled} />

				{isGameStarted ? (
					<>
						<Timer />

						<div>tablutsia</div>
					</>
				) : (
					<>
						<div className="gameButtons">
							<Button
								label={rolesPreviewList.length ? 'Перегенерувати ролі' : 'Видати ролі'}
								onClick={handleGenerateRoles}
							/>
							{rolesPreviewList.length ? <Button label={'Розпочати гру'} onClick={handleGameStarted} /> : null}
						</div>

						<RolesPreviewList roles={rolesPreviewList} />
					</>
				)}
			</div>
		</div>
	);
}

export default App
