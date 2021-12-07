import { UqExt as Uq, assign } from './BzRequirements';
import * as Customer from './Customer.ui';
import * as Staff from './Staff.ui';
import * as Product from './Product.ui';
import * as ProductProject from './ProductProject.ui';
import * as Require from './Require.ui';
import * as Job from './Job.ui';
import * as RequireSheet from './RequireSheet.ui';
	
export function setUI(uq: Uq) {
	assign(uq, 'Customer', Customer);
	assign(uq, 'Staff', Staff);
	assign(uq, 'Product', Product);
	assign(uq, 'ProductProject', ProductProject);
	assign(uq, 'Require', Require);
	assign(uq, 'Job', Job);
	assign(uq, 'RequireSheet', RequireSheet);
}
export * from './BzRequirements';
