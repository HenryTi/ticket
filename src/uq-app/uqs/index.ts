//=== UqApp builder created on Fri Dec 10 2021 14:54:39 GMT-0500 (北美东部标准时间) ===//
import * as JsTicket from './JsTicket';

export interface UQs {
	JsTicket: JsTicket.UqExt;
}

export * as JsTicket from './JsTicket';

export function setUI(uqs:UQs) {
	JsTicket.setUI(uqs.JsTicket);
}
