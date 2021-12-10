import { VPage } from "tonwa";
import { CCustomer } from "./CCustomer";

export class VCustomerEdit extends VPage<CCustomer> {
    header() { return '编辑客户' }

    content() {
        //let { JsTicket } = this.controller.uqs;
        //let { Customer } = JsTicket;
        //let {ui} = Customer;
        /*
        return <Form fieldLabelSize={2} formData={param}
        schema={schema} 
        uiSchema={uiSchema}
        onButtonClick={this.onSubmit}  />;
        */
        return <div>VCustomerEdit</div>;
    }
}