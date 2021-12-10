//=== UqApp builder created on Tue Jan 12 2021 23:14:51 GMT-0500 (GMT-05:00) ===//
import { AppConfig } from "tonwa";
import { DevConfig } from 'tonwa-core';

const js: DevConfig = {
	name: 'jksoft',
	alias: 'js',
}

export const appConfig: AppConfig = {
	version: '0.1.0',
	app: undefined,
	uqs: [
		{
			dev: js,
			name: 'ticket',
			alias: 'Ticket',
			version: '0.1.0',
		},
	],
	noUnit: true,
	oem: undefined,
	htmlTitle: '工单',
};
