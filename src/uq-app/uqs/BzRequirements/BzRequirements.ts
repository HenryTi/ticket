//=== UqApp builder created on Mon Dec 06 2021 19:08:27 GMT-0500 (北美东部标准时间) ===//
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IDXValue, Uq, UqTuid, UqAction, UqQuery, UqID } from "tonwa-core";
import { Render, UI } from "tonwa-react";


//===============================
//======= UQ BizDev/requirements ========
//===============================

export enum JobState {
	init = 1,
	doing = 2,
	done = 100
}

export enum JobLevel {
	normal = 1,
	high = 2
}

export enum JobAssess {
	ok = 1,
	good = 2,
	excellent = 3
}

export enum EnumRequireSheetFlow {
	init = 0,
	approving = 1,
	approved = 2,
	done = 100,
	cancelled = 101
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

export interface ParamChangeVice {
	id: number;
	vice: string;
}
export interface ResultChangeVice {
}

export interface Param$setMyTimezone {
	_timezone: number;
}
export interface Result$setMyTimezone {
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

export interface Customer {
	id?: number;
	no?: string;
	name: string;
	vice: string;
}

export interface Staff {
	id?: number;
	no?: string;
	name: string;
}

export interface Product {
	id?: number;
	productProject: number;
	version: string;
	discription: string;
}

export interface ProductProject {
	id?: number;
	no?: string;
	name: string;
	vice: string;
}

export interface Require {
	id?: number;
	main?: number;
	product: number;
	discription: string;
}

export interface Job {
	id?: number;
	discription: string;
	level: any;
	minute: number;
	fee: number;
	creator: number;
}

export interface RequireSheet {
	id?: number;
	no?: string;
	customer: number;
	creator: number;
}

export interface ParamActs {
	customer?: Customer[];
	staff?: Staff[];
	product?: Product[];
	productProject?: ProductProject[];
	require?: Require[];
	job?: Job[];
	requireSheet?: RequireSheet[];
}


export interface UqExt extends Uq {
	Acts(param: ParamActs): Promise<any>;
	SQL: Uq;
	IDRender(id: number): JSX.Element;

	$user: UqTuid<Tuid$user> & { tv: (id: number, render?: Render<any>) => JSX.Element };
	$sheet: UqTuid<Tuid$sheet> & { tv: (id: number, render?: Render<any>) => JSX.Element };
	ChangeVice: UqAction<ParamChangeVice, ResultChangeVice>;
	$setMyTimezone: UqAction<Param$setMyTimezone, Result$setMyTimezone>;
	$poked: UqQuery<Param$poked, Result$poked>;
	$getMyTimezone: UqQuery<Param$getMyTimezone, Result$getMyTimezone>;
	QueryTest: UqQuery<ParamQueryTest, ResultQueryTest>;
	QueryTest1: UqQuery<ParamQueryTest1, ResultQueryTest1>;
	Customer: UqID<any> & { ui: UI };
	Staff: UqID<any>;
	Product: UqID<any>;
	ProductProject: UqID<any>;
	Require: UqID<any>;
	Job: UqID<any>;
	RequireSheet: UqID<any>;
}

export function assign(uq: any, to: string, from: any): void {
	let hasEntity = uq.hasEntity(to);
	if (hasEntity === false) {
		return;
	}
	Object.assign((uq as any)[to], from);
}
