import {createSelector} from 'reselect';
import getMatches from "./get_matches";
import _ from 'lodash'

const getSelectedMatch = (state, id) => createSelector(
	getMatches,
	(matches) => _.find(matches, {id})
)(state);

export default getSelectedMatch;