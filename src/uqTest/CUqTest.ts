import { CUqBase } from "uq-app";
import { Customer } from "uq-app/uqs/JsTicket";
import { VCustomerEdit } from "./VCustomerEdit";
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
        let { JsTicket } = this.uqs;
        let ret = await JsTicket.Acts({
            customer: [customer],
        });
        alert('已保存 ' + JSON.stringify(ret));
    }

    editCustomer = async (customer: Customer) => {
        this.openVPage(VCustomerEdit);
    }

    listCustomer = async () => {
        let { JsTicket } = this.uqs;
        let ret = await JsTicket.ID({
            IDX: JsTicket.Customer,
            id: [1, 2, 3, 4],
        });
        alert('列表 ' + JSON.stringify(ret));
    }

    loadTvCustomer = async () => {
        let { JsTicket } = this.uqs;
        let ret = await JsTicket.IDTv([-1, -2, -3]);
        alert('tv列表 ' + JSON.stringify(ret));
    }

    changeCustomer = async () => {
        await this.uqs.JsTicket.ChangeVice.submit({ id: 4, vice: 'test change vice' });
        alert('完成');
    }
}
