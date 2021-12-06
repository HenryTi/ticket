// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FieldItem, FieldItemNumber, FieldItemString, FieldItemId, FieldItemInt, UI, TFunc } from 'tonwa-react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Res, uqStringify, setRes } from "tonwa-core";
import { OrderDetail } from "./BzHelloTonwa";

/*--fields--*/
const fields = {
	id: {
		"name": "id",
		"type": "id",
		"isKey": false,
		"label": "Id"
	} as FieldItemId,
	master: {
		"name": "master",
		"type": "id",
		"isKey": true,
		"label": "Master"
	} as FieldItemId,
	row: {
		"name": "row",
		"type": "integer",
		"isKey": true,
		"widget": "updown",
		"label": "Row"
	} as FieldItemInt,
	product: {
		"name": "product",
		"type": "id",
		"isKey": false,
		"label": "Product"
	} as FieldItemId,
	price: {
		"name": "price",
		"type": "number",
		"isKey": false,
		"widget": "number",
		"label": "Price"
	} as FieldItemNumber,
	quantity: {
		"name": "quantity",
		"type": "number",
		"isKey": false,
		"widget": "number",
		"label": "Quantity"
	} as FieldItemNumber,
	amount: {
		"name": "amount",
		"type": "number",
		"isKey": false,
		"widget": "number",
		"label": "Amount"
	} as FieldItemNumber,
};
/*==fields==*/

const fieldArr: FieldItem[] = [
	fields.master, fields.row, fields.product, fields.price, fields.quantity, fields.amount, 
];

export const ui: UI = {
	label: "OrderDetail",
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

export function render(item: OrderDetail):JSX.Element {
	return <>{uqStringify(item)}</>;
};
