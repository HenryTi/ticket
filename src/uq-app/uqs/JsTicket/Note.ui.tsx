// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FieldItem, FieldItemNumber, FieldItemString, FieldItemId, FieldItemInt, UI, TFunc } from 'tonwa-react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Res, uqStringify, setRes } from "tonwa-core";
import { Note } from "./JsTicket";

/*--fields--*/
const fields = {
	id: {
		"name": "id",
		"type": "id",
		"isKey": false,
		"label": "Id"
	} as FieldItemId,
	content: {
		"name": "content",
		"type": "string",
		"isKey": false,
		"widget": "string",
		"label": "Content"
	} as FieldItemString,
	attach: {
		"name": "attach",
		"isKey": false,
		"label": "Attach"
	} as undefined,
	creator: {
		"name": "creator",
		"type": "id",
		"isKey": false,
		"label": "Creator"
	} as FieldItemId,
};
/*==fields==*/

const fieldArr: FieldItem[] = [
	fields.content, fields.attach, fields.creator, 
];

export const ui: UI = {
	label: "Note",
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

export function render(item: Note):JSX.Element {
	return <>{uqStringify(item)}</>;
};
