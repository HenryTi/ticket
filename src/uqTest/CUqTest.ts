import { CUqBase } from "uq-app";
import { Customer } from "uq-app/uqs/BzHelloTonwa";
import { VUqTest } from "./VUqTest";

export class CUqTest extends CUqBase {
    protected async internalStart() {
        this.openVPage(VUqTest);
    }

    newCustomer = async (customer: Customer) => {
        let { BzHelloTonwa } = this.uqs;
        let ret = await BzHelloTonwa.Acts({
            customer: [customer],
        });
        alert('已保存 ' + JSON.stringify(ret));
    }

    listCustomer = async () => {
        let { BzHelloTonwa } = this.uqs;
        let ret = await BzHelloTonwa.ID({
            IDX: BzHelloTonwa.Customer,
            id: [1, 2],
        });
        alert('列表 ' + JSON.stringify(ret));
    }

    loadTvCustomer = async () => {
        let { BzHelloTonwa } = this.uqs;
        let ret = await BzHelloTonwa.IDTv([-1, -2, -3]);
        alert('tv列表 ' + JSON.stringify(ret));
    }
}
