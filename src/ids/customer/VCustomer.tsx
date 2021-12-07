import { FA, Form, VPage } from "tonwa";
import { CCustomer } from "./CCustomer";

export class VCustomer extends VPage<CCustomer> {
    header() { return '客户管理'; }
    right() {
        return <button className="btn btn-sm btn-success me-2" onClick={this.controller.newCustomer}>
            <FA name="plus" />
        </button>;
    }
    content() {
        return <div className="p-3">
            <button className="btn btn-primary" onClick={this.controller.list}>客户列表</button>
        </div>;
    }
}
