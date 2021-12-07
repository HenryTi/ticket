import { CUqBase } from "uq-app";
import { Customer } from "uq-app/uqs/BzRequirements";
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
        let { BzRequirements } = this.uqs;
        this.newNo = await BzRequirements.IDNO({ ID: BzRequirements.Customer });
        this.openVPage(VCustomerNew);
    }

    onNewSubmit = async (data: Customer) => {
        let { BzRequirements } = this.uqs;
        let ret = await BzRequirements.Acts(
            {
                customer: [data],

            }
        );
        alert(JSON.stringify(ret));
    }

    list = async () => {
        let { BzRequirements } = this.uqs;
        this.customerList = await BzRequirements.QueryID<Customer>({
            ID: BzRequirements.Customer,
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
