import { VPage } from "tonwa";
import { CStaff } from "./CStaff";

export class VStaffView extends VPage<CStaff> {
    header() { return '编辑职员' }

    content() {
        //let { JsTicket } = this.controller.uqs;
        //let { Staff } = JsTicket;
        //let {ui} = Staff;
        /*
        return <Form fieldLabelSize={2} formData={param}
        schema={schema} 
        uiSchema={uiSchema}
        onButtonClick={this.onSubmit}  />;
        */
        return <div>VStaffEdit</div>;
    }
}