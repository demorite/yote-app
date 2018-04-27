import * as _ from 'lodash';
import {createSelector} from "reselect";
import getBabyFoots from "./get_babyfoots";

const getSelectedBabyFoot = (state, id) => createSelector(
	getBabyFoots,
	(babyFoots) => {
		return _.find(babyFoots, {id: id})
	}
)(state);

export default getSelectedBabyFoot;
