// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FieldItem, FieldItemNumber, FieldItemString, FieldItemId, FieldItemInt, UI, TFunc } from 'tonwa-react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Res, uqStringify, setRes } from "tonwa-core";
import { Contact } from "./JsTicket";

/*--fields--*/
const fields = {
	id: {
		"name": "id",
		"type": "id",
		"isKey": false,
		"label": "Id"
	} as FieldItemId,
	user: {
		"name": "user",
		"type": "id",
		"isKey": false,
		"label": "User"
	} as FieldItemId,
	alias: {
		"name": "alias",
		"type": "string",
		"isKey": false,
		"widget": "string",
		"label": "Alias"
	} as FieldItemString,
};
/*==fields==*/

const fieldArr: FieldItem[] = [
	fields.user, fields.alias, 
];

export const ui: UI = {
	label: "Contact",
	fieldArr,
	fields,
};

const resRaw: Res<any> = {
	$zh: {
	},
	$en: {
	}
};
const res: any = {};
setRes(res, resRaw);

export const t:TFunc = (str:string|JSX.Element): string|JSX.Element => {
	return res[str as string] ?? str;
}

export function render(item: Contact):JSX.Element {
	return <>{uqStringify(item)}</>;
};
