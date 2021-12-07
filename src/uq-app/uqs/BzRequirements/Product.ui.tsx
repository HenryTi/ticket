// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FieldItem, FieldItemNumber, FieldItemString, FieldItemId, FieldItemInt, UI, TFunc } from 'tonwa-react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Res, uqStringify, setRes } from "tonwa-core";
import { Product } from "./BzRequirements";

/*--fields--*/
const fields = {
	id: {
		"name": "id",
		"type": "id",
		"isKey": false,
		"label": "Id"
	} as FieldItemId,
	productProject: {
		"name": "productProject",
		"type": "id",
		"isKey": true,
		"label": "ProductProject"
	} as FieldItemId,
	version: {
		"name": "version",
		"type": "string",
		"isKey": true,
		"widget": "string",
		"label": "Version"
	} as FieldItemString,
	discription: {
		"name": "discription",
		"isKey": false,
		"label": "Discription"
	} as undefined,
};
/*==fields==*/

const fieldArr: FieldItem[] = [
	fields.productProject, fields.version, fields.discription, 
];

export const ui: UI = {
	label: "Product",
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

export function render(item: Product):JSX.Element {
	return <>{uqStringify(item)}</>;
};
