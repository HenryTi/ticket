import { VPage } from "tonwa";
import { List, LMR } from "tonwa";
import { Staff } from "uq-app/uqs/JsTicket";
import { CStaff } from "./CStaff";

export class VStaffList extends VPage<CStaff> {
    header() { return '่ๅๅ่กจ' }

    content() {
        //let { JsTicket } = this.controller.uqs;
        //let { Staff } = JsTicket;
        return <div>
            <List items={this.controller.data.staffList}
                item={{ render: this.renderItem, onClick: (item: Staff) => this.controller.showStaff(item) }} />
        </div>;
    }

    private renderItem = (item: Staff, index: number) => {
        let { no, name } = item
        return <div className="px-3 py-2 d-block">
            <LMR left={<b>{name}</b>} right={<small className="text-muted">{no}</small>}></LMR>
        </div>
    };
}