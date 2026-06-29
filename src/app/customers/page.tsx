import { CustomersTable } from "@/components/customers-table";

export default function CustomersPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Customers</h1>
        <p className="text-sm text-zinc-500">
          Manage accounts, subscriptions, and customer lifecycle.
        </p>
      </div>
      <CustomersTable />
    </div>
  );
}
