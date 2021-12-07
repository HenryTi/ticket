import { CUqBase } from "uq-app";
import { Customer } from "uq-app/uqs/BzRequirements";
import { VCustomerEdit } from "./VCustomerEdit";
import { VCustomerNew } from "./VCustomerNew";
import { VUqTest } from "./VUqTest";

export class CUqTest extends CUqBase {
    protected async internalStart() {
        this.openVPage(VUqTest);
    }

    newCustomer = async (customer: Customer) => {
        customer = {
            no: '333',
            name: 'jk1',
            vice: 'jk1 test'
        }
        // this.openVPage(VCustomerNew);
        let { BzRequirements } = this.uqs;
        let ret = await BzRequirements.Acts({
            customer: [customer],
        });
        alert('已保存 ' + JSON.stringify(ret));
    }

    editCustomer = async (customer: Customer) => {
        this.openVPage(VCustomerEdit);
    }

    listCustomer = async () => {
        let { BzRequirements } = this.uqs;
        let ret = await BzRequirements.ID({
            IDX: BzRequirements.Customer,
            id: [1, 2, 3, 4],
        });
        alert('列表 ' + JSON.stringify(ret));
    }

    loadTvCustomer = async () => {
        let { BzRequirements } = this.uqs;
        let ret = await BzRequirements.IDTv([-1, -2, -3]);
        alert('tv列表 ' + JSON.stringify(ret));
    }

    changeCustomer = async () => {
        await this.uqs.BzRequirements.ChangeVice.submit({ id: 4, vice: 'test change vice' });
        alert('完成');
    }
}
