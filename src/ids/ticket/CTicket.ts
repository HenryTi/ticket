import { CUqBase } from "uq-app";
import { ReturnMyTicketsRet, Staff } from "uq-app/uqs/JsTicket";
import { VMyTickets } from "./VMyTickets";
import { VTicketNew } from "./VTicketNew";

class TicketData {
    myTickets: ReturnMyTicketsRet[];
    selectedStaff: Staff;
}

export class CTicket extends CUqBase {
    data: TicketData;

    init(...param: any[]): void {
        this.data = this.shallow({
            myTickets: undefined,
            selectedStaff: undefined,
        } as TicketData);
    }

    async loadMyTicket() {
        let ret = await this.uqs.JsTicket.MyTickets.query({});
        this.runInAction(() => {
            this.data.myTickets = ret.ret;
        });
    }

    newTicket = () => {
        this.data.selectedStaff = undefined;
        this.openVPage(VTicketNew);
    }

    renderMyTickets() {
        return this.renderView(VMyTickets);
    }

    setStaff(staff: Staff) {
        this.runInAction(() => {
            this.data.selectedStaff = staff;
        });
    }

    saveTicket = async (discription: string) => {
        await this.uqs.JsTicket.SaveTicket.submit({ to: this.data.selectedStaff.id, discription });
    }
}
