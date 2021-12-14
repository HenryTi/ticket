import { FA, LMR, View } from "tonwa-react";
import { ReturnGetFolderNotesRet } from "uq-app/uqs/JsTicket";
import { CNote } from ".";

export class VNoteItemView extends View<CNote> {
    render(item: ReturnGetFolderNotesRet): JSX.Element {
        // eslint-disable-next-line
        let { id, content, attach, creator } = item;
        // let { JsTicket } = this.controller.uqs;
        let vOwner = this.controller.isMe(creator) === true ?
            <div className="small text-success">[我]</div>
            :
            <div className="small text-muted">
                <FA name="user-o" className="me-2" />
                {creator}
            </div>;
        let left = <div className="d-block">
            {vOwner}
            <div>{content}</div>
        </div>;
        return <LMR className="px-3 py-2" left={left}>
        </LMR>;
    }
}
