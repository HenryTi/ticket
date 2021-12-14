//=== UqApp builder created on Mon Dec 13 2021 20:59:42 GMT-0500 (北美东部标准时间) ===//
import * as JsTicket from './JsTicket';

export interface UQs {
	JsTicket: JsTicket.UqExt;
}

export * as JsTicket from './JsTicket';

export function setUI(uqs:UQs) {
	JsTicket.setUI(uqs.JsTicket);
}
