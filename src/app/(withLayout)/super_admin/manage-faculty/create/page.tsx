import UMBreadCrumb from "@/components/ui/UMBreadCrumb";

const CreateFacultyPage = () => {
  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: "super_admin",
            link: "/super_admin",
          },
          {
            label: "faculty",
            link: "/super_admin/faculty",
          },
        ]}
      />
      <h1>Create Admin</h1>
    </div>
  );
};

export default CreateFacultyPage;
