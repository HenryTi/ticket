import { CUqBase } from "uq-app";
import { Customer } from "uq-app/uqs/JsTicket";
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
        let { JsTicket } = this.uqs;
        this.newNo = await JsTicket.IDNO({ ID: JsTicket.Customer });
        this.openVPage(VCustomerNew);
    }

    onNewSubmit = async (data: Customer) => {
        let { JsTicket } = this.uqs;
        let ret = await JsTicket.Acts(
            {
                customer: [data],

            }
        );
        alert(JSON.stringify(ret));
    }

    list = async () => {
        let { JsTicket } = this.uqs;
        this.customerList = await JsTicket.QueryID<Customer>({
            ID: JsTicket.Customer,
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
