import { List, VPage } from "tonwa-react";
import { Staff } from "uq-app/uqs/BzTicket";
import { CStaff } from "./CStaff";

export class VStaffSelect extends VPage<CStaff> {
    header() { return '选择职员' }
    content() {
        return <div>
            <List items={this.controller.data.staffList} item={{ render: this.renderStaff, onSelect: this.onSelect }} />
        </div>
    }

    onSelect = (staff: Staff, isSelected: boolean) => {
        this.controller.returnCall(staff);
        this.closePage();
    }

    renderStaff = (staff: Staff, index: number) => {
        return <div className="px-3 py-2">
            {JSON.stringify(staff)}
        </div>
    }
}