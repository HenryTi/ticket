//=== UqApp builder created on Fri Dec 10 2021 14:54:39 GMT-0500 (北美东部标准时间) ===//
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IDXValue, Uq, UqTuid, UqAction, UqQuery, UqID } from "tonwa-core";
import { Render, IDXEntity } from "tonwa-react";


//===============================
//======= UQ jksoft/ticket ========
//===============================

export enum SourceType {
	customer = 1,
	ticket = 2
}

export enum TicketBox {
	todo = 1,
	toAssess = 2
}

export interface Tuid$sheet {
	id?: number;
	no: string;
	user: number;
	date: any;
	sheet: number;
	version: number;
	flow: number;
	app: number;
	state: number;
	discription: string;
	data: string;
	processing: number;
}

export interface Tuid$user {
	id?: number;
	name: string;
	nick: string;
	icon: string;
	assigned: string;
	poke: number;
	timezone: number;
}

export interface Param$setMyTimezone {
	_timezone: number;
}
export interface Result$setMyTimezone {
}

export interface ParamSaveTicket {
	to: number;
	discription: string;
}
export interface ResultSaveTicket {
}

export interface ParamSaveTicketType {
	typeName: string;
	typeVice: string;
	states: {
		stateName: string;
		stateVice: string;
	}[];

}
export interface ReturnSaveTicketTypeRet {
	id: number;
}
export interface ResultSaveTicketType {
	ret: ReturnSaveTicketTypeRet[];
}

export interface ParamChangeVice {
	id: number;
	vice: string;
}
export interface ResultChangeVice {
}

export interface Param$poked {
}
export interface Return$pokedRet {
	poke: number;
}
export interface Result$poked {
	ret: Return$pokedRet[];
}

export interface Param$getMyTimezone {
}
export interface Return$getMyTimezoneRet {
	timezone: number;
	unitTimeZone: number;
}
export interface Result$getMyTimezone {
	ret: Return$getMyTimezoneRet[];
}

export interface ParamMyTickets {
}
export interface ReturnMyTicketsRet {
	ticket: number;
	discription: string;
	node: number;
	prev: number;
	state: number;
	operator: number;
	from: number;
}
export interface ResultMyTickets {
	ret: ReturnMyTicketsRet[];
}

export interface ParamQueryTest1 {
	id: number;
}
export interface ReturnQueryTest1Ret {
	id: number;
	no: string;
	name: string;
	vice: string;
}
export interface ResultQueryTest1 {
	ret: ReturnQueryTest1Ret[];
}

export interface ParamQueryTest {
	id: number;
}
export interface ReturnQueryTestRet {
	id: number;
	no: string;
	name: string;
	vice: string;
}
export interface ResultQueryTest {
	ret: ReturnQueryTestRet[];
}

export interface Customer {
	id?: number;
	no?: string;
	name: string;
	vice: string;
}

export interface ProductPackage {
	id?: number;
	name: string;
	vice: string;
}

export interface Market {
	id?: number;
	no?: string;
	name: string;
	vice: string;
	icon: string;
}

export interface PackageVersion {
	id?: number;
	package: number;
	version: string;
}

export interface Project {
	id?: number;
	no?: string;
	name: string;
	vice: string;
}

export interface Ticket {
	id?: number;
	discription: string;
	creator: number;
}

export interface TicketType {
	id?: number;
	name: string;
	vice: string;
	firstState: number;
}

export interface Source {
	id?: number;
	name: string;
	vice: string;
	type: any;
}

export interface PackageCustomer {
	id?: number;
	packageVersion: number;
	customer: number;
}

export interface TicketSheet {
	id?: number;
	creator: number;
}

export interface SourceCustomer {
	id?: number;
	main?: number;
}

export interface TicketNode {
	id?: number;
	ticket: number;
	prev: number;
	state: number;
	operator: number;
}

export interface Staff {
	id?: number;
	no?: string;
	name: string;
}

export interface SourceCustomerSheet {
	id?: number;
	no?: string;
	customer: number;
}

export interface TicketState {
	id?: number;
	main?: number;
	name: string;
	vice: string;
}

export interface TicketAssess {
	id?: number;
	name: string;
	vice: string;
	min: number;
	max: number;
}

export interface ParamActs {
	customer?: Customer[];
	productPackage?: ProductPackage[];
	market?: Market[];
	packageVersion?: PackageVersion[];
	project?: Project[];
	ticket?: Ticket[];
	ticketType?: TicketType[];
	source?: Source[];
	packageCustomer?: PackageCustomer[];
	ticketSheet?: TicketSheet[];
	sourceCustomer?: SourceCustomer[];
	ticketNode?: TicketNode[];
	staff?: Staff[];
	sourceCustomerSheet?: SourceCustomerSheet[];
	ticketState?: TicketState[];
	ticketAssess?: TicketAssess[];
}


export interface UqExt extends Uq {
	Acts(param:ParamActs): Promise<any>;
	SQL: Uq;
	IDRender(id:number):JSX.Element;
	IDLocalRender(id:number):JSX.Element;

	$sheet: UqTuid<Tuid$sheet>&{tv:(id:number, render?:Render<any>)=>JSX.Element};
	$user: UqTuid<Tuid$user>&{tv:(id:number, render?:Render<any>)=>JSX.Element};
	$setMyTimezone: UqAction<Param$setMyTimezone, Result$setMyTimezone>;
	SaveTicket: UqAction<ParamSaveTicket, ResultSaveTicket>;
	SaveTicketType: UqAction<ParamSaveTicketType, ResultSaveTicketType>;
	ChangeVice: UqAction<ParamChangeVice, ResultChangeVice>;
	$poked: UqQuery<Param$poked, Result$poked>;
	$getMyTimezone: UqQuery<Param$getMyTimezone, Result$getMyTimezone>;
	MyTickets: UqQuery<ParamMyTickets, ResultMyTickets>;
	QueryTest1: UqQuery<ParamQueryTest1, ResultQueryTest1>;
	QueryTest: UqQuery<ParamQueryTest, ResultQueryTest>;
	Customer: UqID<any> & IDXEntity<any>;
	ProductPackage: UqID<any> & IDXEntity<any>;
	Market: UqID<any> & IDXEntity<any>;
	PackageVersion: UqID<any> & IDXEntity<any>;
	Project: UqID<any> & IDXEntity<any>;
	Ticket: UqID<any> & IDXEntity<any>;
	TicketType: UqID<any> & IDXEntity<any>;
	Source: UqID<any> & IDXEntity<any>;
	PackageCustomer: UqID<any> & IDXEntity<any>;
	TicketSheet: UqID<any> & IDXEntity<any>;
	SourceCustomer: UqID<any> & IDXEntity<any>;
	TicketNode: UqID<any> & IDXEntity<any>;
	Staff: UqID<any> & IDXEntity<any>;
	SourceCustomerSheet: UqID<any> & IDXEntity<any>;
	TicketState: UqID<any> & IDXEntity<any>;
	TicketAssess: UqID<any> & IDXEntity<any>;
}

export function assign(uq: any, to:string, from:any): void {
	let hasEntity = uq.hasEntity(to);
	if (hasEntity === false) {
		return;
	}
	Object.assign((uq as any)[to], from);
}
