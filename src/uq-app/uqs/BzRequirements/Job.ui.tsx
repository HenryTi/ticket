// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FieldItem, FieldItemNumber, FieldItemString, FieldItemId, FieldItemInt, UI, TFunc } from 'tonwa-react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Res, uqStringify, setRes } from "tonwa-core";
import { Job } from "./BzRequirements";

/*--fields--*/
const fields = {
	id: {
		"name": "id",
		"type": "id",
		"isKey": false,
		"label": "Id"
	} as FieldItemId,
	discription: {
		"name": "discription",
		"isKey": false,
		"label": "Discription"
	} as undefined,
	level: {
		"name": "level",
		"isKey": false,
		"label": "Level"
	} as undefined,
	minute: {
		"name": "minute",
		"type": "integer",
		"isKey": false,
		"widget": "updown",
		"label": "Minute"
	} as FieldItemInt,
	fee: {
		"name": "fee",
		"type": "number",
		"isKey": false,
		"widget": "number",
		"label": "Fee"
	} as FieldItemNumber,
	creator: {
		"name": "creator",
		"type": "id",
		"isKey": false,
		"label": "Creator"
	} as FieldItemId,
};
/*==fields==*/

const fieldArr: FieldItem[] = [
	fields.discription, fields.level, fields.minute, fields.fee, fields.creator, 
];

export const ui: UI = {
	label: "Job",
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

export function render(item: Job):JSX.Element {
	return <>{uqStringify(item)}</>;
};
