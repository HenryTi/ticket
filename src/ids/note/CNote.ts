import { CUqBase } from "uq-app";
import { Folder, Note, ReturnGetFolderNotesRet, Space, SysFolder } from "uq-app/uqs/JsTicket";
import { VFolder } from "./VFolder";
import { VFolders } from "./VFolders";
import { VFolerNotes } from "./VFolderNotes";
import { VNote } from "./VNote";
import { VNoteEdit, VNoteNew } from "./VNoteNew";
import { VNoteItemView } from "./VNoteItemView";
import { VTo } from "./VTo";

export interface NoteData {
    folders: Folder[];
    notes: ReturnGetFolderNotesRet[];
    note: Note;
}

const sysFolderName: { [type in SysFolder]: string } = {
    [SysFolder.inbox]: '收单箱',
    [SysFolder.all]: '全部工单',
    [SysFolder.draft]: '草稿',
    [SysFolder.trash]: '回收箱',
};

export class CNote extends CUqBase {
    data: NoteData;
    space: Space;
    folder: Folder;

    init(...param: any[]): void {
        this.data = this.shallow({
            folders: undefined,
            notes: undefined,
        } as NoteData);
    }

    async loadFolders() {
        let space = this.space?.id;
        let { folder, sys } = await this.uqs.JsTicket.GetFolders.query({ space });
        for (let item of sys) {
            let { type } = item;
            item.name = sysFolderName[type as SysFolder];
        }
        this.runInAction(() => {
            this.data.folders = [...sys, ...folder];
        });
    }

    async getFolderNotes(folder: number) {
        let space = this.space?.id;
        let ret = await this.uqs.JsTicket.GetFolderNotes.query({ space, folder });
        this.runInAction(() => {
            this.data.notes = ret.ret;
        });
    }

    async saveNote(content: string) {
        let space = this.space?.id;
        let note = this.data.note?.id;
        let ret = await this.uqs.JsTicket.SaveNote.submit({
            space,
            note,
            content,
            attach: undefined,
            x: undefined,
        });
        this.runInAction(() => {
            if (note) {
                this.data.note.content = content;
            }
        });
    }

    renderMyNotes() {
        return this.renderView(VFolerNotes);
    }

    newNote = () => {
        this.data.note = undefined;
        this.openVPage(VNoteNew);
    }

    showNote = (note: Note) => {
        this.data.note = note;
        this.openVPage(VNote);
    }

    sendNote = async () => {
        this.openVPage(VTo);
    }

    editNote = async () => {
        this.openVPage(VNoteEdit);
    }

    showInbox = async () => {

    }

    showAll = async () => {

    }

    showFolder = async (folder: Folder) => {
        this.folder = folder;
        await this.getFolderNotes(folder.id);
        this.openVPage(VFolder);
    }

    renderFolders() {
        return this.renderView(VFolders);
    }

    renderNoteItem(note: Note) {
        return this.renderView(VNoteItemView, note);
    }
}
