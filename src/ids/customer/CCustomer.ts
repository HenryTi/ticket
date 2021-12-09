import { CUqBase } from "uq-app";
import { Customer } from "uq-app/uqs/BzTicket";
import { VCustomer } from "./VCustomer";
import { VCustomerList } from "./VCustomerList";
import { VCustomerNew } from "./VCustomerNew";
import { VCustomerView } from "./VCustomerView";

export class CCustomer extends CUqBase {
    newNo: string;
    customerList: Customer[];

    protected async internalStart() {
        this.openVPage(VCustomer);
    }

    newCustomer = async () => {
        let { BzTicket } = this.uqs;
        this.newNo = await BzTicket.IDNO({ ID: BzTicket.Customer });
        this.openVPage(VCustomerNew);
    }

    onNewSubmit = async (data: Customer) => {
        let { BzTicket } = this.uqs;
        let ret = await BzTicket.Acts(
            {
                customer: [data],

            }
        );
        alert(JSON.stringify(ret));
    }

    list = async () => {
        let { BzTicket } = this.uqs;
        this.customerList = await BzTicket.QueryID<Customer>({
            ID: BzTicket.Customer,
            page: {
                start: 0,
                size: 100,
            }
        });
        this.openVPage(VCustomerList);
    }

    showCustomer = async (item: Customer) => {
        this.openVPage(VCustomerView);
    }
}
