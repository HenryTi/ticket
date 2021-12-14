import { FA, VPage } from "tonwa-react";
import { CNote } from "./CNote";

export class VNote extends VPage<CNote> {
    header(): string | boolean | JSX.Element {
        return '详情';
    }

    content(): JSX.Element {
        return this.react(() => {
            let { content, creator } = this.controller.data.note;
            let vTop: any;
            if (this.controller.isMe(creator) === true) {
                vTop = <div className="d-flex mx-1 my-3 px-3">
                    <button className="btn btn-sm btn-primary me-3" onClick={this.controller.sendNote}>发送</button>
                    <div className="flex-fill" />
                    <button className="btn btn-sm btn-outline-primary" onClick={this.controller.editNote}>
                        <FA name="pencil" />
                    </button>
                </div>;
            }
            return <div className="">
                {vTop}
                <div className="border bg-white rounded p-3 my-1 mx-1">
                    {content}
                </div>
            </div>;
        });
    }
}