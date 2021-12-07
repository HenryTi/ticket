//=== UqApp builder created on Mon Dec 06 2021 19:08:27 GMT-0500 (北美东部标准时间) ===//
import * as BzRequirements from './BzRequirements';

export interface UQs {
	BzRequirements: BzRequirements.UqExt;
}

export * as BzRequirements from './BzRequirements';

export function setUI(uqs:UQs) {
	BzRequirements.setUI(uqs.BzRequirements);
}
