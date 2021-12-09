import { FA, VPage } from "tonwa";
import { CStaff } from "./CStaff";

export class VStaff extends VPage<CStaff> {
    header() { return '客户管理'; }
    right() {
        return <button className="btn btn-sm btn-success me-2" onClick={this.controller.newStaff}>
            <FA name="plus" />
        </button>;
    }
    content() {
        return <div className="p-3">
            <button className="btn btn-primary" onClick={this.controller.list}>客户列表</button>
        </div>;
    }
}
