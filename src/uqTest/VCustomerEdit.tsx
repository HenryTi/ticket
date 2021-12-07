import { Form, VPage } from "tonwa";
import { CUqTest } from "uqTest";

export class VCustomerEdit extends VPage<CUqTest> {

    content() {
        let { BzRequirements } = this.controller.uqs;
        let { Customer } = BzRequirements;
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