import { Form, VPage } from "tonwa";
import { CUqTest } from "uqTest";

export class VCustomerEdit extends VPage<CUqTest> {

    content() {
        let { BzHelloTonwa } = this.controller.uqs;
        let { Customer } = BzHelloTonwa;
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