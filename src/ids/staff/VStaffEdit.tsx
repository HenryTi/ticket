import { VPage } from "tonwa";
import { CStaff } from "./CStaff";

export class VStaffEdit extends VPage<CStaff> {
    header() { return '编辑职员' }

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