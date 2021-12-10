import { CUqBase } from "uq-app";
import { Staff } from "uq-app/uqs/JsTicket";
import { VStaff } from "./VStaff";
import { VStaffList } from "./VStaffList";
import { VStaffNew } from "./VStaffNew";
import { VStaffSelect } from "./VStaffSelect";
import { VStaffView } from "./VStaffView";

export class CStaff extends CUqBase {
    data: {
        newNo: string;
        staffList: Staff[];
    };

    init(...param: any[]): void {
        this.data = this.shallow({
            newNo: undefined,
            staffList: undefined,
        });
    }

    protected async internalStart() {
        this.openVPage(VStaff);
    }

    newStaff = async () => {
        let { JsTicket } = this.uqs;
        let newNo = await JsTicket.IDNO({ ID: JsTicket.Staff });
        this.runInAction(() => {
            this.data.newNo = newNo;
            this.openVPage(VStaffNew);
        });
    }

    onNewSubmit = async (data: Staff) => {
        let { JsTicket } = this.uqs;
        let ret = await JsTicket.Acts(
            {
                staff: [data],
            }
        );
        alert(JSON.stringify(ret));
    }

    private async loadList() {
        let { JsTicket } = this.uqs;
        let staffList = await JsTicket.QueryID<Staff>({
            ID: JsTicket.Staff,
            page: {
                start: 0,
                size: 100,
            }
        });
        this.runInAction(() => {
            this.data.staffList = staffList;
        });
    }

    list = async () => {
        await this.loadList();
        this.openVPage(VStaffList);
    }

    showStaff = async (item: Staff) => {
        this.openVPage(VStaffView);
    }

    async selectStaff() {
        await this.loadList();
        return await this.vCall(VStaffSelect);
    }
}
