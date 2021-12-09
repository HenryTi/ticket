import { UqExt as Uq, assign } from './BzTicket';
import * as Customer from './Customer.ui';
import * as Project from './Project.ui';
import * as SourceCustomerSheet from './SourceCustomerSheet.ui';
import * as PackageCustomer from './PackageCustomer.ui';
import * as Staff from './Staff.ui';
import * as PackageVersion from './PackageVersion.ui';
import * as ProductPackage from './ProductPackage.ui';
import * as Source from './Source.ui';
import * as SourceCustomer from './SourceCustomer.ui';
import * as TicketSheet from './TicketSheet.ui';
import * as TicketState from './TicketState.ui';
import * as TicketType from './TicketType.ui';
import * as TicketNode from './TicketNode.ui';
import * as TicketAssess from './TicketAssess.ui';
import * as Ticket from './Ticket.ui';
import * as Market from './Market.ui';
	
export function setUI(uq: Uq) {
	assign(uq, 'Customer', Customer);
	assign(uq, 'Project', Project);
	assign(uq, 'SourceCustomerSheet', SourceCustomerSheet);
	assign(uq, 'PackageCustomer', PackageCustomer);
	assign(uq, 'Staff', Staff);
	assign(uq, 'PackageVersion', PackageVersion);
	assign(uq, 'ProductPackage', ProductPackage);
	assign(uq, 'Source', Source);
	assign(uq, 'SourceCustomer', SourceCustomer);
	assign(uq, 'TicketSheet', TicketSheet);
	assign(uq, 'TicketState', TicketState);
	assign(uq, 'TicketType', TicketType);
	assign(uq, 'TicketNode', TicketNode);
	assign(uq, 'TicketAssess', TicketAssess);
	assign(uq, 'Ticket', Ticket);
	assign(uq, 'Market', Market);
}
export * from './BzTicket';
