import { List, View } from "tonwa";
import { ReturnGetFolderNotesRet } from "uq-app/uqs/JsTicket";
import { CNote } from ".";
import { VNoteItemView } from "./VNoteItemView";

export class VFolerNotes extends View<CNote> {
    render() {
        return this.react(() => {
            let { data } = this.controller;
            let { notes } = data;
            return <List none="[无]"
                items={notes}
                item={{ render: this.renderMyNote, onClick: this.onNote, key: item => item.ticket }}
            />;
        })
    }

    private renderMyNote = (item: ReturnGetFolderNotesRet, index: number) => {
        return this.renderVm(VNoteItemView, item);
    }

    private onNote = (item: ReturnGetFolderNotesRet) => {
        this.controller.showNote(item);
    }
}
