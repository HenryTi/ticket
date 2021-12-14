import { List, VPage } from "tonwa-react";
import { Note } from "uq-app/uqs/JsTicket";
import { CNote } from "./CNote";

export class VFolder extends VPage<CNote> {
    header() { return this.controller.folder.name; }
    content(): JSX.Element {
        return <List
            items={this.controller.data.notes}
            item={{ render: this.renderNote, onClick: this.onNote }}
        />
    }

    private renderNote = (note: Note, index: number) => {
        return this.controller.renderNoteItem(note);
    }

    private onNote = (note: Note) => {
        this.controller.showNote(note);
    }
}
