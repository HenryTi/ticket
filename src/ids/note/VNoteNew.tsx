import { ChangeEvent } from "react";
import { FA, VPage } from "tonwa";
import { CNote } from "./CNote";

class VNoteEditBase extends VPage<CNote> {
    data: {
        buttonDisabled: boolean;
    };
    private textarea: HTMLTextAreaElement;

    init(param?: any): void {
        this.data = this.shallow({
            buttonDisabled: true,
        });
    }
    right() {
        return this.react(() => {
            return <button
                disabled={this.data.buttonDisabled}
                className="btn btn-sm btn-success me-2"
                onClick={this.saveNote}>
                <FA name="paper-plane-o" className="me-1" /> 提交
            </button>;
        });
    }

    content() {
        let { note } = this.controller.data;
        return <div className="m-3">
            <textarea ref={tt => this.textarea = tt}
                className="w-100 rounded form-control"
                onChange={this.onChange}
                style={{ height: '75vh', }}
                defaultValue={note?.content} />
        </div>
    }

    private saveNote = async () => {
        await this.controller.saveNote(this.textarea.value);
        this.closePage();
    }

    private onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        this.runInAction(() => {
            let { value } = e.currentTarget;
            let { note } = this.controller.data;
            if (note) {
                this.data.buttonDisabled = note.content === value;
            }
            else {
                this.data.buttonDisabled = value.trim().length === 0;
            }
        });
    }
}

export class VNoteNew extends VNoteEditBase {
    header() { return '新建工单' }
}

export class VNoteEdit extends VNoteEditBase {
    header() { return '修改工单' }
}
