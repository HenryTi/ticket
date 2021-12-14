import { FA, LMR, View } from "tonwa-react";
import { CNote } from ".";

export class VFolders extends View<CNote> {
    render() {
        return this.react(() => {
            let { folders } = this.controller.data;
            if (!folders) return null;
            return <div className="mt-3">
                {folders.map(v => {
                    let { id, name } = v;
                    return <LMR className="px-3 py-2 cursor-pointer bg-white border-bottom justify-content-start"
                        key={id} onClick={() => this.controller.showFolder(v)}
                        left={<div><FA className="me-3 text-primary" name="hand-o-right" fixWidth={true} />{name}</div>}
                        right={<FA name="angle-right" />}
                    />;
                })}
            </div>;
        });
    }
}