//=== UqApp builder created on Wed Dec 08 2021 23:37:44 GMT-0500 (北美东部标准时间) ===//
import * as BzTicket from './BzTicket';

export interface UQs {
	BzTicket: BzTicket.UqExt;
}

export * as BzTicket from './BzTicket';

export function setUI(uqs:UQs) {
	BzTicket.setUI(uqs.BzTicket);
}
