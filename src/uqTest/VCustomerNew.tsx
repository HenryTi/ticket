import { Form, VPage } from "tonwa";
import { CUqTest } from "uqTest";

export class VCustomerNew extends VPage<CUqTest> {

    content() {
        let { JsTicket } = this.controller.uqs;
        let { Customer } = JsTicket;
        //let {ui} = Customer;
        /*
        return <Form fieldLabelSize={2} formData={param}
        schema={schema}
        uiSchema={uiSchema}
        onButtonClick={this.onSubmit}  />;
        */
        return <div>VCustomerNew</div>;
    }
}