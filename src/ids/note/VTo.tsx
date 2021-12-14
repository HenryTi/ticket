import { ChangeEvent } from "react";
import { VPage } from "tonwa-react";
import { CNote } from ".";

export class VTo extends VPage<CNote> {
    data: {
        receipt: string;
        error: string;
    };

    init(param?: any): void {
        this.data = this.shallow({
            receipt: '',
            error: undefined,
        });
    }

    header() { return '接收人' }
    protected get back(): "close" | "back" | "none" {
        return "close";
    }
    content() {
        return <div className="p-3">
            <div>
                <input type="text" onChange={this.onChange} />
                <button className="btn btn-primary" onClick={this.send}>发送</button>
            </div>
            <div>
                接收人: {this.react(() => <>{this.data.receipt}</>)}
            </div>
            {
                this.react(() => <div className="text-danger">{this.data.error}</div>)
            }
        </div >;
    }

    private onChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.runInAction(() => {
            this.data.receipt = e.currentTarget.value;
        });
    }

    private send = async () => {
        let to = await this.controller.web.centerApi.userFromKey(this.data.receipt);
        if (!to) {
            this.data.error = `${this.data.receipt} 不存在`;
            return;
        }
    }
}
