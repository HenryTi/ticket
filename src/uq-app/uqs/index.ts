//=== UqApp builder created on Thu Dec 02 2021 23:05:16 GMT-0500 (北美东部标准时间) ===//
import * as BzHelloTonwa from './BzHelloTonwa';

export interface UQs {
	BzHelloTonwa: BzHelloTonwa.UqExt;
}

export * as BzHelloTonwa from './BzHelloTonwa';

export function setUI(uqs:UQs) {
	BzHelloTonwa.setUI(uqs.BzHelloTonwa);
}
