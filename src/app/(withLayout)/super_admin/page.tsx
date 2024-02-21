import UMBreadCrumb from "@/components/ui/UMBreadCrumb";

const SuperAdmin = () => {
  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: "super_admin",
            link: "/super_admin",
          },
        ]}
      />
      <h1>SuperAdmin</h1>
    </div>
  );
};

export default SuperAdmin;
